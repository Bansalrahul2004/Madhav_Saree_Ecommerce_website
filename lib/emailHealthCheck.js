import nodemailer from 'nodemailer'

export const checkEmailServiceHealth = async () => {
    try {
        // Check if required environment variables are set
        const requiredVars = ['NODEMAILER_HOST', 'NODEMAILER_EMAIL', 'NODEMAILER_PASSWORD']
        const missingVars = requiredVars.filter(varName => !process.env[varName])
        
        if (missingVars.length > 0) {
            return {
                healthy: false,
                error: `Missing environment variables: ${missingVars.join(', ')}`,
                timestamp: new Date().toISOString()
            }
        }

        // Create a test transporter
        const host = process.env.NODEMAILER_HOST
        const port = Number(process.env.NODEMAILER_PORT || 587)
        const secureEnv = process.env.NODEMAILER_SECURE
        const secure = typeof secureEnv === 'string' ? secureEnv === 'true' : port === 465

        const testTransporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD,
            },
            connectionTimeout: 10000,
            greetingTimeout: 5000,
            socketTimeout: 20000,
        })

        // Test the connection
        await testTransporter.verify()
        
        return {
            healthy: true,
            message: 'Email service is working properly',
            timestamp: new Date().toISOString(),
            config: {
                host,
                port,
                secure,
                user: process.env.NODEMAILER_EMAIL
            }
        }
    } catch (error) {
        return {
            healthy: false,
            error: error.message,
            code: error.code,
            timestamp: new Date().toISOString()
        }
    }
}

export const logEmailServiceStatus = async () => {
    const health = await checkEmailServiceHealth()
    if (health.healthy) {
        console.log('✅ Email service health check passed:', health.message)
    } else {
        console.error('❌ Email service health check failed:', health.error)
    }
    return health
}
