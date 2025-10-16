import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Shipping Policy',
    links: [
        { label: 'Shipping Policy' },
    ]
}

const ShippingPolicy = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Shipping Policy</h1>
                <p>We aim to deliver your orders safely and on time. Please review our shipping guidelines below.</p>

                <p className='mt-5'><b>1. Processing Time</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Orders are typically processed within 1–3 business days.</li>
                    <li>Peak season or custom orders may require additional time.</li>
                </ul>

                <p className='mt-5'><b>2. Delivery Time & Partners</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Delivery within India: 3–7 business days after dispatch.</li>
                    <li>International delivery timelines vary by destination and customs.</li>
                </ul>

                <p className='mt-5'><b>3. Shipping Charges</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Shipping charges (if any) are calculated at checkout based on location and order value.</li>
                </ul>

                <p className='mt-5'><b>4. Order Tracking</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Once shipped, you will receive a tracking link via email/SMS.</li>
                </ul>

                <p className='mt-5'><b>5. Damaged or Lost Packages</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>If your package arrives damaged or is delayed, contact support with your order ID and unboxing video/images.</li>
                </ul>

                <p className='mt-5'>For any shipping-related queries, our support team is ready to assist.</p>
            </div>
        </div>
    )
}

export default ShippingPolicy


