import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Cancellation & Refund',
    links: [
        { label: 'Cancellation & Refund' },
    ]
}

const CancellationAndRefund = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Cancellation & Refund Policy</h1>

                <p>We strive to ensure a smooth and hassle-free shopping experience. Please review our policy below for cancellations and refunds.</p>

                <p className='mt-5'><b>1. Order Cancellation</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Orders can be cancelled before they are shipped. Once shipped, cancellation is not possible.</li>
                    <li>To cancel an order, contact our support team with your order ID.</li>
                </ul>

                <p className='mt-5'><b>2. Refund Eligibility</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Refunds are applicable for cancelled orders (before shipment) and eligible returns as per our return guidelines.</li>
                    <li>Products must be unused, with tags intact, and in original packaging.</li>
                </ul>

                <p className='mt-5'><b>3. Refund Method & Timeline</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Approved refunds are processed to the original payment method.</li>
                    <li>Processing time is typically 5–7 business days after approval. Bank timelines may vary.</li>
                </ul>

                <p className='mt-5'><b>4. Non-Refundable Items</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Customized/altered items and items marked as final sale are not eligible for refund.</li>
                </ul>

                <p className='mt-5'><b>5. How to Initiate</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Email us with your order ID, reason, and unboxing video/images in case of damage/defect.</li>
                </ul>

                <p className='mt-5'>For any assistance, please reach out to our support team. We are here to help.</p>
            </div>
        </div>
    )
}

export default CancellationAndRefund


