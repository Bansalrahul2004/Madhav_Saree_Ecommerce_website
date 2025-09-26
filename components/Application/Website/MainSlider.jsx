'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slider1 from '@/public/assets/images/slider-1.png'
import slider2 from '@/public/assets/images/slider-2.png'
import slider3 from '@/public/assets/images/slider-3.png'
import slider4 from '@/public/assets/images/slider-4.png'
import Image from 'next/image';
import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";


const ArrowNext = (props) => {
    const { onClick } = props
    return (
        <button 
            onClick={onClick} 
            type='button' 
            className='w-12 h-12 flex justify-center items-center rounded-full absolute z-20 top-1/2 -translate-y-1/2 right-4 bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group' 
        >
            <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300 shadow-lg'>
                <LuChevronRight size={18} className='text-white group-hover:scale-110 transition-transform duration-300' />
            </div>
        </button>
    )
}
const ArrowPrev = (props) => {
    const { onClick } = props
    return (
        <button 
            onClick={onClick} 
            type='button' 
            className='w-12 h-12 flex justify-center items-center rounded-full absolute z-20 top-1/2 -translate-y-1/2 left-4 bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group' 
        >
            <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300 shadow-lg'>
                <LuChevronLeft size={18} className='text-white group-hover:scale-110 transition-transform duration-300' />
            </div>
        </button>
    )
}

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrow: false,
                    nextArrow: '',
                    prevArrow: ''
                }
            }
        ]
    }
    return (
        <div className='relative mb-12'>
            <Slider {...settings}>
                <div>
                    <Image src={slider1.src} width={slider1.width} height={slider1.height} alt='Exquisite Silk Sarees' />
                </div>
                <div>
                    <Image src={slider2.src} width={slider2.width} height={slider2.height} alt='Designer Collection' />
                </div>
                <div>
                    <Image src={slider3.src} width={slider3.width} height={slider3.height} alt='Bridal Sarees' />
                </div>
                <div>
                    <Image src={slider4.src} width={slider4.width} height={slider4.height} alt='Party Wear Sarees' />
                </div>
            </Slider>
        </div>
    )
}

export default MainSlider