import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Contact Us',
    links: [
        { label: 'Contact Us' },
    ]
}

const ContactUs = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Contact Us</h1>
                <p className='mb-3'>We’d love to hear from you. Reach out for support, queries, or feedback.</p>

                <div className='grid md:grid-cols-2 gap-8 mt-6'>
                    <div>
                        <h2 className='font-semibold mb-2'>Customer Support</h2>
                        <ul className='list-disc ps-6'>
                            <li>Email: <a className='underline' href='mailto:support@example.com'>support@example.com</a></li>
                            <li>Phone: <a className='underline' href='tel:+918107708989'>+91 81077 08989</a></li>
                            <li>Hours: Mon–Sat, 10:00 AM – 6:00 PM IST</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-semibold mb-2'>Store Address</h2>
                        <p>123, Main Market Road,<br/>Jaipur, Rajasthan, India</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='font-semibold mb-3'>Send us a message</h2>
                    <form className='grid gap-4 max-w-xl'>
                        <input className='border rounded px-3 py-2' type='text' placeholder='Your Name' />
                        <input className='border rounded px-3 py-2' type='email' placeholder='Email Address' />
                        <textarea className='border rounded px-3 py-2' rows={5} placeholder='Message'></textarea>
                        <button type='button' className='bg-black text-white px-4 py-2 rounded w-fit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs


