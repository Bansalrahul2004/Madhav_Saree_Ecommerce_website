import { checkEmailServiceHealth } from '@/lib/emailHealthCheck'
import { response } from '@/lib/helperFunction'

export async function GET() {
    try {
        const healthStatus = await checkEmailServiceHealth()
        
        if (healthStatus.healthy) {
            return response(true, 200, 'Email service is healthy', healthStatus)
        } else {
            return response(false, 503, 'Email service is unhealthy', healthStatus)
        }
    } catch (error) {
        return response(false, 500, 'Failed to check email service health', { error: error.message })
    }
}
