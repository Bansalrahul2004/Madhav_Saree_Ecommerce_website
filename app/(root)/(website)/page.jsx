// Slider removed per request
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner1 from '@/public/assets/images/banner1.png'
import banner2 from '@/public/assets/images/banner2.png'
import FeaturedProduct from '@/components/Application/Website/FeaturedProduct'
import Testimonial from '@/components/Application/Website/Testimonial'
import { WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import VideoHero from '@/components/Application/Website/VideoHero'
import VideoClipsSection from '@/components/Application/Website/VideoClipsSection'

import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbRosetteDiscountFilled } from "react-icons/tb";

const Home = () => {
    return (
        <>
            {/* Video hero below navbar */}
            <div className='lg:mt-0'>
                <VideoHero />
            </div>

            {/* Featured products directly below the video hero */}
            <FeaturedProduct />

            {/* Video clips section */}
            <VideoClipsSection />

            {/* Keep only testimonials after the video clips */}
            <Testimonial />

        </>
    )
}

export default Home