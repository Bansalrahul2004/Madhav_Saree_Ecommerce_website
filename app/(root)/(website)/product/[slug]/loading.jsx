import React from 'react'
import loading from '@/public/assets/images/loading.svg'
import Image from 'next/image'

const ProductLoading = () => {
    return (
        <div className='lg:px-32 px-4 py-10'>
            <div className='animate-pulse'>
                {/* Breadcrumb skeleton */}
                <div className='flex gap-2 mb-10'>
                    <div className='h-4 bg-gray-200 rounded w-16'></div>
                    <div className='h-4 bg-gray-200 rounded w-4'></div>
                    <div className='h-4 bg-gray-200 rounded w-20'></div>
                    <div className='h-4 bg-gray-200 rounded w-4'></div>
                    <div className='h-4 bg-gray-200 rounded w-32'></div>
                </div>
                
                <div className='md:flex justify-between items-start lg:gap-10 gap-5'>
                    {/* Image skeleton */}
                    <div className='md:w-1/2'>
                        <div className='bg-gray-200 rounded h-96 w-full'></div>
                        <div className='flex gap-3 mt-4'>
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className='bg-gray-200 rounded h-20 w-20'></div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Content skeleton */}
                    <div className='md:w-1/2 md:mt-0 mt-5'>
                        <div className='h-8 bg-gray-200 rounded w-3/4 mb-4'></div>
                        <div className='flex gap-1 mb-5'>
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className='h-5 w-5 bg-gray-200 rounded'></div>
                            ))}
                            <div className='h-4 bg-gray-200 rounded w-24 ml-2'></div>
                        </div>
                        <div className='h-6 bg-gray-200 rounded w-32 mb-3'></div>
                        <div className='h-4 bg-gray-200 rounded w-24 mb-5'></div>
                        <div className='space-y-3'>
                            <div className='h-4 bg-gray-200 rounded w-full'></div>
                            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                            <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                        </div>
                        <div className='mt-5'>
                            <div className='h-4 bg-gray-200 rounded w-20 mb-2'></div>
                            <div className='flex gap-3'>
                                {[1, 2, 3].map(i => (
                                    <div key={i} className='h-8 bg-gray-200 rounded w-16'></div>
                                ))}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='h-4 bg-gray-200 rounded w-16 mb-2'></div>
                            <div className='flex gap-3'>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className='h-8 bg-gray-200 rounded w-12'></div>
                                ))}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='h-4 bg-gray-200 rounded w-24 mb-2'></div>
                            <div className='h-10 bg-gray-200 rounded w-32'></div>
                        </div>
                        <div className='mt-5'>
                            <div className='h-12 bg-gray-200 rounded w-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductLoading

