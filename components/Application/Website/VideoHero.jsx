import Link from 'next/link'
import React from 'react'

const VideoHero = () => {
    return (
        // Use negative top offset so the video reaches up to the fixed header (header uses pt-[88px] / lg:pt-[110px])
        <section aria-label="Saree video hero" className='relative w-full -mt-[88px] lg:-mt-[110px] h-[calc(60vh+88px)] lg:h-[calc(90vh+110px)] md:h-[calc(70vh+88px)] overflow-hidden'>
            <video
                className='absolute inset-0 w-full h-full object-cover'
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
            >
                <source src='/assets/clip/clip_top.mp4' type='video/mp4' />
            </video>

            {/* semi-transparent overlay to keep header readable */}
            <div className='absolute inset-0 bg-black/20' />
            
            {/* Gradient fade-out at bottom for smooth transition */}
            <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent' />

            <div className='relative z-10 flex items-center justify-center w-full h-full px-4 text-center'>
                <div>
                    <h1 className='text-white font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                        Timeless Saree Elegance
                    </h1>
                    <p className='text-white/90 mt-3 text-sm sm:text-base md:text-lg'>
                        Discover our exclusive saree collection that defines grace.
                    </p>
                    <div className='mt-6'>
                        <Link href="/shop" className='inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow transition-transform duration-200 hover:shadow-lg hover:scale-[1.03]'>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoHero


