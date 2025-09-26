import nodemailer from 'nodemailer'

// Reuse a pooled transporter across sends to avoid cold connection overhead in production
let sharedTransporter

function getTransporter() {
    if (sharedTransporter) return sharedTransporter

    const host = process.env.NODEMAILER_HOST
    const port = Number(process.env.NODEMAILER_PORT || 587)
    const secureEnv = process.env.NODEMAILER_SECURE
    const secure = typeof secureEnv === 'string' ? secureEnv === 'true' : port === 465

    sharedTransporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
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

export const sendMail = async (subject, receiver, body) => {
    const transporter = getTransporter()

    const options = {
        from: `"Madhav Sarees" <${process.env.NODEMAILER_EMAIL}>`,
        to: receiver,
        subject: subject,
        html: body
    }

    try {
        await transporter.sendMail(options)
        return { success: true }
    } catch (error) {
        // Minimal logging for visibility in production logs without leaking secrets
        console.error('sendMail error:', error?.message)
        return { success: false, message: error.message }
    }
}