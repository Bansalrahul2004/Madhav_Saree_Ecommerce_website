import Image from 'next/image'
import React from 'react'
import imgPlaceholder from '@/public/assets/images/img-placeholder.webp'
import Link from 'next/link'
import { WEBSITE_PRODUCT_DETAILS } from '@/routes/WebsiteRoute'
const ProductBox = ({ product }) => {

    return (
        <Link href={WEBSITE_PRODUCT_DETAILS(product.slug)} className='block h-full'>
            <div className='h-full flex flex-col rounded-xl overflow-hidden'>
                {/* Image area */}
                <div className='w-full h-[260px] sm:h-[240px] md:h-[260px] lg:h-[220px] bg-gray-100 overflow-hidden'>
                    <Image
                        src={product?.media[0]?.secure_url || imgPlaceholder.src}
                        width={600}
                        height={600}
                        alt={product?.media[0]?.alt || product?.name}
                        title={product?.media[0]?.title || product?.name}
                        className='w-full h-full object-cover object-top'
                    />
                </div>

                {/* Content area */}
                <div className="p-4 flex-1 flex flex-col justify-between border-t">
                    <div>
                        <h4 className='text-sm font-medium mb-2 line-clamp-2'>{product?.name}</h4>
                        <p className='flex gap-2 text-sm mt-2 items-center'>
                            <span className='line-through text-gray-400 text-xs'>{product?.mrp.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                            <span className='font-semibold text-sm'>{product?.sellingPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                        </p>
                    </div>

                    <div className='mt-4'>
                        <button className='w-full text-center px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200'>
                            View Product
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductBox