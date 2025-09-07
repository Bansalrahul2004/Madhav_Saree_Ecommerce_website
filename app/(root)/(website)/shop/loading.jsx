import React from 'react'

const ShopLoading = () => {
    return (
        <div className='lg:px-32 px-4 my-20'>
            <div className='animate-pulse'>
                {/* Breadcrumb skeleton */}
                <div className='mb-10'>
                    <div className='h-6 bg-gray-200 rounded w-48'></div>
                </div>
                
                <div className='lg:flex'>
                    {/* Filter skeleton */}
                    <div className='w-72 me-4'>
                        <div className='bg-gray-50 p-4 rounded'>
                            <div className='space-y-4'>
                                <div className='h-6 bg-gray-200 rounded w-24'></div>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className='space-y-2'>
                                        <div className='h-4 bg-gray-200 rounded w-20'></div>
                                        {[1, 2, 3].map(j => (
                                            <div key={j} className='h-3 bg-gray-200 rounded w-16'></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Content skeleton */}
                    <div className='lg:w-[calc(100%-18rem)]'>
                        {/* Sorting skeleton */}
                        <div className='flex justify-between items-center mb-6'>
                            <div className='h-8 bg-gray-200 rounded w-32'></div>
                            <div className='h-8 bg-gray-200 rounded w-24'></div>
                        </div>
                        
                        {/* Products grid skeleton */}
                        <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 mt-10'>
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className='space-y-3'>
                                    <div className='bg-gray-200 rounded h-64 w-full'></div>
                                    <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                                    <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                                    <div className='h-6 bg-gray-200 rounded w-24'></div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Load more button skeleton */}
                        <div className='flex justify-center mt-10'>
                            <div className='h-10 bg-gray-200 rounded w-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopLoading

