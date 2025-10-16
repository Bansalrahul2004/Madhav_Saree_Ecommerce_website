'use client'

import axios from 'axios';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductBox from './ProductBox';

const FeaturedProduct = () => {
    const [productData, setProductData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/get-featured-product`)
                setProductData(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if (loading) {
        return (
            <section className='relative px-4 sm:py-12 py-8 overflow-hidden -mt-8'>
                <div className='relative z-10 max-w-7xl mx-auto'>
                    <div className='text-center py-12'>
                        <div className='animate-pulse'>
                            <div className='h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4'></div>
                            <div className='h-4 bg-gray-300 rounded w-1/2 mx-auto'></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (!productData) return null
    return (
        <section className='relative px-4 sm:py-12 py-8 overflow-hidden -mt-8'>
            {/* Premium video background */}
            <video
                className='absolute inset-0 w-full h-full object-cover'
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                style={{
                    animation: 'slowVideo 20s linear infinite',
                    transform: 'scale(1.1)'
                }}
            >
                <source src='/assets/clip/clip_feature.mp4' type='video/mp4' />
            </video>
            
            <style jsx>{`
                @keyframes slowVideo {
                    0% { transform: scale(1.1) translateX(0%); }
                    50% { transform: scale(1.1) translateX(-2%); }
                    100% { transform: scale(1.1) translateX(0%); }
                }
            `}</style>
            
            {/* Premium overlay with gradient - enhanced for better transition */}
            <div className='absolute inset-0 bg-gradient-to-br from-purple-900/70 via-purple-800/50 to-pink-800/50' />
            
            {/* Additional gradient for smooth transition from hero */}
            <div className='absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-900/80 to-transparent' />
            
            {/* Subtle glow effect for eye-catching transition */}
            <div className='absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-purple-400/20 via-purple-600/10 to-transparent blur-sm' />
            
            {/* Content with relative positioning */}
            <div className='relative z-10 max-w-7xl mx-auto'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg animate-bounce' style={{animationDuration: '3s'}}>Ishori's Featured Collection</h2>
                    <p className='text-white/90 max-w-2xl mx-auto text-base md:text-lg mb-6 drop-shadow-md'>Discover our handpicked collection of the most exquisite and trending sarees</p>
                    <div className='flex justify-center'>
                        <Link href="/shop" className='inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group'>
                            View All Collections
                            <IoIosArrowRoundForward className='group-hover:translate-x-1 transition-transform duration-300' />
                        </Link>
                    </div>
                </div>

                {/* Responsive grid: 1 column mobile, 2 tablet, 4 desktop */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
                {!productData.success && (
                    <div className='col-span-full text-center py-12'>
                        <div className='bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 inline-block'>
                            <p className='text-gray-700 text-base'>No featured sarees available at the moment.</p>
                        </div>
                    </div>
                )}

                {productData.success && productData.data.map((product) => (
                    <div key={product._id} className='h-full'>
                        {/* Card wrapper ensures consistent height and hover effects */}
                        <div className='h-full flex flex-col rounded-xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-white/20'>
                            <ProductBox product={product} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProduct