import nodemailer from 'nodemailer'

// Reuse a pooled transporter across sends to avoid cold connection overhead in production
let sharedTransporter

function getTransporter() {
    if (sharedTransporter) return sharedTransporter

    const host = process.env.NODEMAILER_HOST
    const port = Number(process.env.NODEMAILER_PORT || 587)
    const secureEnv = process.env.NODEMAILER_SECURE
    const secure = typeof secureEnv === 'string' ? secureEnv === 'true' : port === 465

    const authUser = process.env.NODEMAILER_USERNAME || process.env.NODEMAILER_EMAIL

    sharedTransporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            // Brevo requires SMTP login (e.g., <id>@smtp-brevo.com) as username
            user: authUser,
            pass: process.env.NODEMAILER_PASSWORD,
        },
        pool: true,
        maxConnections: Number(process.env.NODEMAILER_MAX_CONNECTIONS || 3),
        maxMessages: Number(process.env.NODEMAILER_MAX_MESSAGES || 50),
        connectionTimeout: Number(process.env.NODEMAILER_CONNECTION_TIMEOUT || 10000),
        greetingTimeout: Number(process.env.NODEMAILER_GREETING_TIMEOUT || 5000),
        socketTimeout: Number(process.env.NODEMAILER_SOCKET_TIMEOUT || 20000),
    })

    return sharedTransporter
}

export const sendMail = async (subject, receiver, body, retries = 3) => {
    // Validate required environment variables
    if (!process.env.NODEMAILER_HOST || !process.env.NODEMAILER_PASSWORD) {
        console.error('Missing required SMTP environment variables')
        return { success: false, message: 'Email service not configured properly' }
    }

    const transporter = getTransporter()

    const options = {
        // Use explicit FROM if provided; otherwise fall back to NODEMAILER_EMAIL
        from: `"ishori" <${process.env.NODEMAILER_FROM || process.env.NODEMAILER_EMAIL}>`,
        to: receiver,
        subject: subject,
        html: body
    }

    // Retry logic for failed sends
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            // Verify connection before sending
            if (attempt === 1) {
                await transporter.verify()
            }

            const result = await transporter.sendMail(options)
            console.log(`Email sent successfully to ${receiver} (attempt ${attempt})`)
            return { success: true, messageId: result.messageId }
        } catch (error) {
            console.error(`Email send attempt ${attempt} failed:`, {
                error: error.message,
                code: error.code,
                command: error.command,
                response: error.response
            })

            // If this is the last attempt, return the error
            if (attempt === retries) {
                return { 
                    success: false, 
                    message: error.message,
                    code: error.code,
                    attempts: retries
                }
            }

            // Wait before retrying (exponential backoff)
            const delay = Math.pow(2, attempt - 1) * 1000
            console.log(`Retrying email send in ${delay}ms...`)
            await new Promise(resolve => setTimeout(resolve, delay))
        }
    }
}