import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
 title: 'About',
 links: [
   { label: 'About' },
 ]
}
const AboutUs = () => {
 return (
   <div>
     <WebsiteBreadcrumb props={breadcrumb} />
     <div className='lg:px-40 px-5 py-20'>
               <h1 className='text-xl font-semibold mb-3'>About Madhav Saree Sangam</h1>
        <p>Welcome to Madhav Saree Sangam, your premier destination for exquisite sarees that celebrate the timeless elegance of Indian tradition and contemporary fashion.</p>
        <p>Founded with a deep passion for preserving and promoting the rich heritage of Indian sarees, we are dedicated to bringing you the finest collection of sarees from across India. From the luxurious silk sarees of Kanchipuram and Banaras to the elegant cotton sarees of Bengal and the contemporary designer pieces, our curated collection represents the diversity and beauty of Indian craftsmanship.</p>
       <p className='mt-5'>What makes us special:</p>
       <ul className='list-disc ps-10 mt-3'>
         <li> <b> Authentic Craftsmanship:</b> We work directly with skilled artisans and weavers to bring you authentic, handcrafted sarees that preserve traditional techniques.</li>

         <li>  <b> Diverse Collection: </b>From bridal silk sarees to daily wear cotton sarees, designer pieces to traditional weaves, we offer something for every occasion and preference.</li>

         <li> <b>  Expert Styling Guidance: </b>Our team of saree experts is here to help you choose the perfect saree, provide styling tips, and ensure you feel confident and beautiful.</li>

         <li>  <b> Quality Assurance: </b>Every saree in our collection undergoes strict quality checks to ensure you receive only the finest fabrics and craftsmanship.</li>
       </ul>

       <p className='mt-3'>We believe that every woman deserves to feel beautiful and confident in her saree. Whether you're a saree enthusiast or trying it for the first time, we're here to guide you through your saree journey with personalized attention and care.
       </p>
               <p className='mt-3'>
        Thank you for choosing Madhav Saree Sangam. Let's celebrate the elegance and grace of the saree together.
        </p>
     </div>
   </div>
 )
}

export default AboutUs
