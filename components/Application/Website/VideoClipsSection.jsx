'use client'

import React from 'react'

const VideoClipsSection = () => {
    const videoClips = [
        { src: '/assets/clip/clip1.mp4', title: 'Elegant Silk Collection' },
        { src: '/assets/clip/clip2.mp4', title: 'Designer Sarees' },
        { src: '/assets/clip/clip3.mp4', title: 'Bridal Collection' },
        { src: '/assets/clip/clip4.mp4', title: 'Party Wear' }
    ]

    return (
        <section className='relative px-4 sm:py-16 py-12 bg-gradient-to-br from-white via-purple-50 to-pink-50 overflow-hidden'>
            {/* Background decorative elements */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -translate-y-32 translate-x-32 opacity-10'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full translate-y-24 -translate-x-24 opacity-10'></div>
            
            <div className='relative z-10 max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    {/* Decorative line above heading */}
                    <div className='flex justify-center items-center mb-6'>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent'></div>
                        <div className='w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-4'></div>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent'></div>
                    </div>
                    
                    {/* Main heading */}
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight'>
                        Unfold Your Grace. One Saree at a Time.
                    </h2>
                    
                    {/* Subtitle */}
                    <p className='text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed'>
                        Experience the beauty and elegance of our curated saree collection through these stunning video showcases
                    </p>
                </div>

                {/* Video Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {videoClips.map((clip, index) => (
                        <div key={index} className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            {/* Video Container */}
                            <div className='relative aspect-[4/5] overflow-hidden'>
                                <video
                                    className='absolute inset-0 w-full h-full object-cover'
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload='metadata'
                                    webkit-playsinline="true"
                                    x5-playsinline="true"
                                    controls={false}
                                    disablePictureInPicture
                                    controlsList='nodownload noplaybackrate nofullscreen'
                                    poster='/assets/images/img-placeholder.png'
                                >
                                    <source src={clip.src} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                                
                                {/* Gradient overlay for text readability */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                
                                {/* Title overlay */}
                                <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                                    <h3 className='text-white font-semibold text-lg text-center'>
                                        {clip.title}
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Hover effect border */}
                            <div className='absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-xl transition-colors duration-300' />
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className='text-center mt-12'>
                    <button className='inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>
                        Explore All Collections
                        <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default VideoClipsSection
