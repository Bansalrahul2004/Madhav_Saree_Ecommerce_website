// Simple in-memory email queue for better reliability
class EmailQueue {
    constructor() {
        this.queue = []
        this.processing = false
        this.maxRetries = 3
        this.retryDelay = 5000 // 5 seconds
    }

    async add(emailData) {
        const emailJob = {
            id: Date.now() + Math.random(),
            ...emailData,
            attempts: 0,
            createdAt: new Date(),
            status: 'pending'
        }
        
        this.queue.push(emailJob)
        console.log(`Email queued: ${emailJob.subject} to ${emailJob.receiver}`)
        
        // Start processing if not already running
        if (!this.processing) {
            this.processQueue()
        }
        
        return emailJob.id
    }

    async processQueue() {
        if (this.processing || this.queue.length === 0) return
        
        this.processing = true
        
        while (this.queue.length > 0) {
            const job = this.queue.shift()
            
            try {
                // Import sendMail dynamically to avoid circular dependencies
                const { sendMail } = await import('./sendMail.js')
                
                const result = await sendMail(
                    job.subject,
                    job.receiver,
                    job.body,
                    1 // Single retry per job, queue handles retries
                )
                
                if (result.success) {
                    console.log(`✅ Email sent successfully: ${job.subject} to ${job.receiver}`)
                } else {
                    throw new Error(result.message)
                }
                
            } catch (error) {
                console.error(`❌ Email send failed: ${job.subject} to ${job.receiver}`, error.message)
                
                job.attempts++
                job.lastError = error.message
                
                if (job.attempts < this.maxRetries) {
                    // Re-queue for retry
                    job.status = 'retrying'
                    job.retryAt = new Date(Date.now() + this.retryDelay * job.attempts)
                    this.queue.push(job)
                    console.log(`🔄 Email queued for retry ${job.attempts}/${this.maxRetries}: ${job.subject}`)
                } else {
                    console.error(`💀 Email permanently failed after ${this.maxRetries} attempts: ${job.subject}`)
                    job.status = 'failed'
                }
            }
            
            // Small delay between emails to avoid overwhelming the SMTP server
            await new Promise(resolve => setTimeout(resolve, 100))
        }
        
        this.processing = false
    }

    getQueueStatus() {
        return {
            total: this.queue.length,
            processing: this.processing,
            pending: this.queue.filter(job => job.status === 'pending').length,
            retrying: this.queue.filter(job => job.status === 'retrying').length,
            failed: this.queue.filter(job => job.status === 'failed').length
        }
    }

    clearQueue() {
        this.queue = []
        console.log('Email queue cleared')
    }
}

// Export singleton instance
export const emailQueue = new EmailQueue()

// Export convenience function
export const queueEmail = (subject, receiver, body) => {
    return emailQueue.add({ subject, receiver, body })
}
