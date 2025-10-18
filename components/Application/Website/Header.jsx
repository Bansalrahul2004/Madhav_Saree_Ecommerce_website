'use client'
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import logo from '@/public/assets/images/logo.png'
import { IoIosSearch } from "react-icons/io";
import Cart from './Cart'
import { VscAccount } from "react-icons/vsc";
import { useSelector } from 'react-redux'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import userIcon from '@/public/assets/images/user.png'
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import Search from './Search'
import { useSearchParams } from 'next/navigation'

const Header = () => {
    const auth = useSelector(store => store.authStore.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const searchParams = useSearchParams()
    
    // Scroll detection for home page - hide header when scrolling down
    useEffect(() => {
        let lastScrollY = window.scrollY
        let ticking = false
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY
                    const heroHeight = window.innerHeight
                    
                    // Hide header when scrolling down past 80% of hero section
                    // Show header when scrolling back up or at the very top
                    if (scrollTop > heroHeight * 0.8) {
                        setIsScrolled(true)
                    } else if (scrollTop < heroHeight * 0.5 || scrollTop < lastScrollY) {
                        setIsScrolled(false)
                    }
                    
                    lastScrollY = scrollTop
                    ticking = false
                })
                ticking = true
            }
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navLinkClass = !isScrolled ? 'text-white hover:text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-gray-800 hover:text-purple-600'
    const activeCategory = searchParams.get('category')

    return (
        <div className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500 ${
            !isScrolled 
            ? 'bg-transparent' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
        } lg:px-40 px-3 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0,
            transform: isScrolled ? 'translateY(-100%)' : 'translate3d(0, 0, 0)',
            willChange: 'auto',
            backfaceVisibility: 'hidden'
        }}>
            <div className='flex justify-between items-center lg:py-4 py-1'>
                <Link href={WEBSITE_HOME} className='group'>
                    <Image
                        src={logo}
                        width={383}
                        height={146}
                        alt='Ishori'
                        className='lg:w-80 w-44 transition-transform duration-300 group-hover:scale-105'
                        priority
                    />
                </Link>

                <div className='flex justify-between items-center gap-4'>
                    <nav className={`lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 lg:p-0 ${!isScrolled ? 'bg-transparent' : 'bg-gradient-to-b from-white to-purple-50'} lg:bg-transparent fixed z-[9998] top-0 w-full h-screen transition-all ${isMobileMenu ? 'left-0' : '-left-full'}`}>
                        <div className='lg:hidden flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-600 py-4 border-b px-4'>
                            <div className='bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-sm'>
                                <Image
                                    src={logo}
                                    width={383}
                                    height={146}
                                    alt='Ishori'
                                    className='lg:w-32 w-24'
                                    priority
                                />
                            </div>
                            <button type='button' onClick={() => setIsMobileMenu(false)} className='text-white hover:text-purple-200 transition-colors duration-300' >
                                <IoMdClose size={28} />
                            </button>
                        </div>

                        <ul className='lg:flex justify-between items-center gap-6 px-4 py-3 lg:px-6 whitespace-nowrap overflow-x-auto'>
                            <li className='group'>
                                <Link href={WEBSITE_HOME} onClick={() => setIsMobileMenu(false)} className={`${navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-2 px-3 relative group whitespace-nowrap`}>
                                    Home
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${!isScrolled ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href="/about-us" onClick={() => setIsMobileMenu(false)} className={`${navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    About
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${!isScrolled ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${!isScrolled ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={WEBSITE_SHOP} onClick={() => setIsMobileMenu(false)} className={`${navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Shop
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${!isScrolled ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${!isScrolled ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=silk-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'silk-sarees' ? (!isScrolled ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Silk Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=cotton-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'cotton-sarees' ? (!isScrolled ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Cotton Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=designer-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'designer-sarees' ? (!isScrolled ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Designer Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=bridal-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'bridal-sarees' ? (!isScrolled ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Bridal Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=party-wear`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'party-wear' ? (!isScrolled ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Party Wear
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex items-center gap-3'>
                        <button type='button' onClick={() => setShowSearch(!showSearch)} className={`${!isScrolled ? 'text-white/95' : 'text-gray-700'} p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200`} aria-label='Search'>
                            <IoIosSearch size={20} />
                        </button>

                        <div className='relative'>
                            <Cart />
                        </div>

                        {auth ? (
                            <div className='flex items-center gap-2'>
                                <Avatar className='w-8 h-8'>
                                    <AvatarImage src={auth?.profilePicture || userIcon.src} alt='user' />
                                </Avatar>
                                <Link href={USER_DASHBOARD} className={`${!isScrolled ? 'text-white/95' : 'text-gray-800'} transition-colors duration-200 font-medium text-sm tracking-wide`}>
                                    {auth?.name}
                                </Link>
                            </div>
                        ) : (
                            <Link href={WEBSITE_LOGIN} className={`flex items-center gap-2 ${!isScrolled ? 'text-white/95' : 'text-gray-800'} transition-colors duration-200 font-semibold text-sm tracking-wide`}>
                                <VscAccount size={20} />
                                <span className='hidden sm:block'>Login</span>
                            </Link>
                        )}

                        <button type='button' onClick={() => setIsMobileMenu(true)} className={`lg:hidden p-0.1 rounded-md ${!isScrolled ? 'text-white/95' : 'text-gray-700'} hover:bg-white/10 transition-colors duration-200`} aria-label='Open menu'>
                            <HiMiniBars3 size={22} />
                        </button>
                    </div>
                </div>
            </div>

            <Search isShow={showSearch} />
        </div>
    )
}

export default Header