import React from 'react'
import loading from '@/public/assets/images/loading.svg'
import Image from 'next/image'

const WebsiteLoading = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <div className='text-center'>
                <Image src={loading.src} height={80} width={80} alt='Loading' className='mx-auto mb-4' />
                <p className='text-gray-600 font-medium'>Loading...</p>
            </div>
        </div>
    )
}

export default WebsiteLoading

