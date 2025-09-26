import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Terms & Conditions',
    links: [
        { label: 'Terms & Conditions' },
    ]
}

const TermsAndConditions = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Terms & Conditions</h1>

                <p>Welcome to Madhav Sarees. By accessing or using our website, you agree to be bound by the following Terms & Conditions. These terms govern your use of our services and outline the legal obligations between you and Madhav Sarees. Please read them carefully.</p>

                <p className='mt-3'>If you do not agree with any part of these terms, you are advised not to use our website or services.</p>

                <p className='mt-5'><b>1. Website Access & Acceptable Use</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>You agree to use this website solely for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of this site by any third party.</li>
                    <li>Any attempt to interfere with the website's functionality, security, or data integrity is strictly prohibited.</li>
                </ul>

                <p className='mt-5'><b>2. Product Representation & Accuracy</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>We make every effort to ensure that product descriptions, images, and pricing are accurate and up to date.</li>
                    <li>However, colour accuracy cannot be guaranteed due to photographic lighting and screen display variations. All visuals are for representational purposes only.</li>
                    <li>Madhav Sarees reserves the right to correct any errors, omissions, or inaccuracies and to update product information at any time without prior notice.</li>
                </ul>

                <p className='mt-5'><b>3. Orders, Availability & Payments</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>All orders are subject to product availability. Receipt of an order confirmation does not constitute acceptance or guarantee of delivery.</li>
                    <li>In the event of unavailability, we reserve the right to cancel or modify the order and will notify you accordingly.</li>
                    <li>Payments must be made through our secure payment gateways. Madhav Sarees does not store or retain any card or payment information.</li>
                </ul>

                <p className='mt-5'><b>4. Returns, Exchanges & Defect Resolution</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>For returns and exchanges, please refer to our Return Policy.</li>
                    <li>In case of a manufacturing defect, the item will be inspected by the Madhav Sarees team. Upon verification, an exchange will be processed in accordance with our policy.</li>
                    <li>Items damaged due to misuse, wear and tear, or unauthorized alterations are not eligible for exchange.</li>
                </ul>

                <p className='mt-5'><b>5. Intellectual Property Rights</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>All content on this website—including but not limited to logos, designs, product images, text, and graphics—is the exclusive property of Madhav Sarees and is protected under applicable intellectual property laws.</li>
                    <li>No part of this website may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any form without prior written consent from Madhav Sarees.</li>
                </ul>

                <p className='mt-5'><b>6. Limitation of Liability</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Madhav Sarees shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our website, products, or services.</li>
                    <li>This includes, but is not limited to, loss of data, revenue, or business opportunities.</li>
                </ul>

                <p className='mt-5'><b>7. Modifications to Terms</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>We reserve the right to amend, update, or revise these Terms & Conditions at any time.</li>
                    <li>Continued use of the website following any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.</li>
                </ul>

                <p className='mt-5'><b>8. Governing Law & Jurisdiction</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>These Terms & Conditions shall be governed by and construed in accordance with the laws of India.</li>
                    <li>Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Rajasthan.</li>
                </ul>

                <p className='mt-5'><b>9. Contact Information</b></p>
                <p className='mt-3'>For any queries, support requests, or legal concerns, please contact us via:</p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>📧 Email: shopmadhavsarees@gmail.com</li>
                    <li>📞 Phone: +91 81077 08989</li>
                    <li>Customer support is available Monday to Saturday, 10:00 AM – 6:00 PM IST.</li>
                </ul>

                <p className='mt-5'>Thank you for choosing Madhav Sarees.</p>

                <p className='mt-3'>We are committed to delivering a secure, transparent, and culturally rich shopping experience that reflects the heritage and elegance of Indian fashion.</p>
            </div>
        </div>
    )
}

export default TermsAndConditions
