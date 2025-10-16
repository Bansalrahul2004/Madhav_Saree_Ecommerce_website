// Slider removed per request
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner1 from '@/public/assets/images/banner1.png'
import banner2 from '@/public/assets/images/banner2.png'
import FeaturedProduct from '@/components/Application/Website/FeaturedProduct'
import advertisingBanner from '@/public/assets/images/advertising-banner.png'
import Testimonial from '@/components/Application/Website/Testimonial'
import { WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import VideoHero from '@/components/Application/Website/VideoHero'

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

            <section className='lg:px-32 px-4 sm:pt-20 pt-5 pb-10 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-32 translate-x-32 opacity-10'></div>
                <div className='absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full translate-y-24 -translate-x-24 opacity-10'></div>
                
                <div className='relative z-10'>
                    <div className='text-center mb-16'>
                        {/* Decorative line above heading */}
                        <div className='flex justify-center items-center mb-6'>
                            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent'></div>
                            <div className='w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-4'></div>
                            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent'></div>
                        </div>
                        
                        {/* Main heading with enhanced styling */}
                        <h2 className='text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight'>
                            Discover Our Exquisite Collection
                        </h2>
                        
                        {/* Subtitle with enhanced styling */}
                        <p className='text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed font-medium'>
                            From traditional silk sarees to contemporary designer pieces, find the perfect saree for every occasion
                        </p>
                        
                        {/* Decorative line below subtitle */}
                        <div className='flex justify-center items-center mt-6'>
                            <div className='w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent'></div>
                            <div className='w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-3'></div>
                            <div className='w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent'></div>
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-2 sm:gap-12 gap-6'>
                        {/* Bridal Collection Card */}
                        <div className='relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
                            <Link href={`${WEBSITE_SHOP}?category=bridal-sarees`} className='block'>
                                <div className='relative overflow-hidden'>
                            <Image
                                src={banner1}
                                alt='Bridal Sarees Collection'
                                className='w-full h-auto block transition-all duration-700 group-hover:scale-110'
                            />
                                    {/* Overlay gradient */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                    
                                    {/* Content overlay */}
                                    <div className='absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                                        <div className='text-white'>
                                            <h3 className='text-2xl font-bold mb-2 group-hover:text-purple-200 transition-colors duration-300'>Bridal Collection</h3>
                                            <p className='text-white/90 text-base mb-4'>Elegant sarees for your special day</p>
                                            <div className='flex items-center text-purple-200 font-medium'>
                                                <span>Explore Collection</span>
                                                <svg className='w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className='absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100'></div>
                                    <div className='absolute top-6 right-6 w-8 h-8 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100'></div>
                                </div>
                        </Link>
                    </div>

                        {/* Designer Collection Card */}
                        <div className='relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
                            <Link href={`${WEBSITE_SHOP}?category=designer-sarees`} className='block'>
                                <div className='relative overflow-hidden'>
                            <Image
                                src={banner2}
                                alt='Designer Sarees Collection'
                                className='w-full h-auto object-cover block transition-all duration-700 group-hover:scale-110'
                            />
                                    {/* Overlay gradient */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                    
                                    {/* Content overlay */}
                                    <div className='absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                                        <div className='text-white'>
                                            <h3 className='text-2xl font-bold mb-2 group-hover:text-purple-200 transition-colors duration-300'>Designer Collection</h3>
                                            <p className='text-white/90 text-base mb-4'>Contemporary designs for modern women</p>
                                            <div className='flex items-center text-purple-200 font-medium'>
                                                <span>Explore Collection</span>
                                                <svg className='w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative elements removed for cleaner layout */}
                                </div>
                        </Link>
                    </div>
                    </div>
                </div>
            </section>

            <section className='sm:pt-20 pt-5 pb-10'>
                <Image
                    src={advertisingBanner}
                    alt='Advertisement'
                />
            </section>

            <Testimonial />

            <section className='lg:px-32 px-4 border-t py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className='absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-24 translate-x-24 opacity-10'></div>
                <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full translate-y-16 -translate-x-16 opacity-10'></div>
                
                <div className='relative z-10'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>Why Choose Ishori?</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto text-lg'>We're committed to providing you with the best saree shopping experience</p>
                    </div>
                    
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {/* Easy Returns */}
                        <div className='text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 relative overflow-hidden group'>
                            {/* Background decoration */}
                            <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                            
                            {/* Icon container */}
                            <div className='relative z-10 mb-6'>
                                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300'>
                                    <GiReturnArrow size={32} className='text-white group-hover:scale-110 transition-transform duration-300' />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300'>Easy Returns</h3>
                                <p className='text-gray-600 leading-relaxed'>7-day return policy for your peace of mind.</p>
                            </div>

                            {/* Bottom decoration */}
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                        </div>

                        {/* Free Shipping */}
                        <div className='text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 relative overflow-hidden group'>
                            {/* Background decoration */}
                            <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                            
                            {/* Icon container */}
                            <div className='relative z-10 mb-6'>
                                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300'>
                                    <FaShippingFast size={32} className='text-white group-hover:scale-110 transition-transform duration-300' />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300'>Free Shipping</h3>
                                <p className='text-gray-600 leading-relaxed'>Free delivery on orders above ₹999.</p>
                            </div>

                            {/* Bottom decoration */}
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                        </div>

                        {/* Expert Styling */}
                        <div className='text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 relative overflow-hidden group'>
                            {/* Background decoration */}
                            <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                            
                            {/* Icon container */}
                            <div className='relative z-10 mb-6'>
                                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300'>
                                    <BiSupport size={32} className='text-white group-hover:scale-110 transition-transform duration-300' />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300'>Expert Styling</h3>
                                <p className='text-gray-600 leading-relaxed'>Get personalized saree styling advice.</p>
                            </div>

                            {/* Bottom decoration */}
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                        </div>

                        {/* Loyalty Rewards */}
                        <div className='text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 relative overflow-hidden group'>
                            {/* Background decoration */}
                            <div className='absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:opacity-70 transition-opacity duration-300'></div>
                            
                            {/* Icon container */}
                            <div className='relative z-10 mb-6'>
                                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300'>
                                    <TbRosetteDiscountFilled size={32} className='text-white group-hover:scale-110 transition-transform duration-300' />
                                </div>
                    </div>
                            
                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300'>Loyalty Rewards</h3>
                                <p className='text-gray-600 leading-relaxed'>Earn points on every purchase.</p>
                    </div>

                            {/* Bottom decoration */}
                            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home