import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductBox from './ProductBox';

const FeaturedProduct = async () => {
    let productData = null
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/get-featured-product`)
        productData = data
    } catch (error) {
        console.log(error)
    }

    if (!productData) return null
    return (
        <section className='lg:px-32 px-4 sm:py-16 bg-gradient-to-br from-white via-purple-50 to-pink-50'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>Ishori's Featured Collection</h2>
                <p className='text-gray-600 max-w-2xl mx-auto text-lg mb-8'>Discover our handpicked collection of the most exquisite and trending sarees</p>
                <Link href="/shop" className='inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group'>
                    View All Collections
                    <IoIosArrowRoundForward className='group-hover:translate-x-1 transition-transform duration-300' />
                </Link>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 sm:gap-8 gap-4'>
                {!productData.success && (
                    <div className='col-span-full text-center py-12'>
                        <div className='bg-white rounded-2xl p-8 shadow-lg border border-purple-100'>
                            <p className='text-gray-600 text-lg'>No featured sarees available at the moment.</p>
                        </div>
                    </div>
                )}

                {productData.success && productData.data.map((product) => (
                    <div key={product._id} className='transform hover:-translate-y-2 transition-all duration-300'>
                        <ProductBox product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProduct