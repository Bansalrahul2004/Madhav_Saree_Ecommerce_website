'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { BsChatQuote } from "react-icons/bs";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";


const testimonials = [
    {
        name: "Priya Sharma",
        review: "The silk saree I ordered is absolutely stunning! The quality is exceptional and the craftsmanship is beautiful. I received so many compliments at my sister's wedding. Highly recommended!",
        rating: 5
    },
    {
        name: "Anjali Patel",
        review: "Amazing collection of designer sarees! The customer service team helped me choose the perfect saree for my reception. The delivery was prompt and packaging was elegant.",
        rating: 5
    },
    {
        name: "Meera Reddy",
        review: "I've been shopping here for over a year now and every saree has been perfect. The bridal collection is especially beautiful. The team really understands what women want.",
        rating: 5
    },
    {
        name: "Kavya Singh",
        review: "The cotton sarees are so comfortable and stylish. Perfect for daily wear and office. The colors are vibrant and the fabric quality is excellent. Great value for money!",
        rating: 4
    },
    {
        name: "Riya Verma",
        review: "My bridal saree arrived exactly as shown in the pictures. The embroidery work is exquisite and the fit was perfect. The styling advice they provided was very helpful.",
        rating: 5
    },
    {
        name: "Zara Khan",
        review: "Love their party wear collection! The sarees are trendy yet elegant. The return policy is customer-friendly and the team is always ready to help with styling tips.",
        rating: 4
    },
    {
        name: "Aditi Joshi",
        review: "The attention to detail in their sarees is remarkable. From the fabric selection to the finishing, everything is top-notch. I feel confident and beautiful in their sarees.",
        rating: 5
    },
    {
        name: "Neha Gupta",
        review: "Excellent quality sarees at reasonable prices. The website is easy to navigate and the product descriptions are accurate. Delivery was on time and well-packaged.",
        rating: 4
    },
    {
        name: "Pooja Malhotra",
        review: "I was worried about buying sarees online, but this store exceeded my expectations. The sarees are authentic and the customer support team is very responsive.",
        rating: 4
    },
    {
        name: "Shruti Kapoor",
        review: "This is my go-to place for all saree needs. From traditional silk to modern designer pieces, they have everything. The loyalty rewards program is a great bonus!",
        rating: 5
    }
];



const Testimonial = () => {

    const ArrowNext = (props) => {
        const { onClick } = props
        return (
            <button
                onClick={onClick}
                type='button'
                className='w-12 h-12 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 right-4 bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group'
            >
                <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300 shadow-lg'>
                    <LuChevronRight size={16} className='text-white group-hover:scale-110 transition-transform duration-300' />
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
                className='w-12 h-12 flex justify-center items-center rounded-full absolute z-10 top-1/2 -translate-y-1/2 left-4 bg-gradient-to-r from-white/90 to-white/95 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group'
            >
                <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300 shadow-lg'>
                    <LuChevronLeft size={16} className='text-white group-hover:scale-110 transition-transform duration-300' />
                </div>
            </button>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    nextArrow: <ArrowNext />,
                    prevArrow: <ArrowPrev />,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: <ArrowNext />,
                    prevArrow: <ArrowPrev />,
                }
            },

        ]
    }

    return (
        <div className='lg:px-16 px-4 sm:pt-12 pt-4 pb-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white'>
            <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2'>What Our Customers Say</h2>
                <p className='text-gray-600 max-w-xl mx-auto text-base'>Hear from our satisfied customers about their experience with Ishori</p>
            </div>
            <div className='relative'>
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="p-2">
                            <div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 relative overflow-hidden group'>
                                {/* Background decoration */}
                                <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                                
                                {/* Quote icon */}
                                <div className='relative z-10 mb-4'>
                                    <div className='w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg'>
                                        <BsChatQuote size={20} className='text-white' />
                                    </div>
                                </div>

                                {/* Review text */}
                                <div className='relative z-10 mb-4'>
                                    <p className='text-gray-700 leading-relaxed text-sm italic'>"{item.review}"</p>
                                </div>

                                {/* Customer info and rating */}
                                <div className='relative z-10 flex items-center justify-between'>
                                    <div>
                                        <h4 className='font-bold text-gray-800 text-base'>{item.name}</h4>
                                        <p className='text-purple-600 text-xs font-medium'>Verified Customer</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <IoStar key={`star${i}`} className='text-yellow-400' size={16} />
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom decoration */}
                                <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial