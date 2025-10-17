'use client'
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import logo from '@/public/assets/images/logo-black.png'
import { IoIosSearch } from "react-icons/io";
import Cart from './Cart'
import { VscAccount } from "react-icons/vsc";
import { useSelector } from 'react-redux'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import userIcon from '@/public/assets/images/user.png'
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import Search from './Search'
import { usePathname, useSearchParams } from 'next/navigation'

const Header = () => {
    const auth = useSelector(store => store.authStore.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const isHome = pathname === '/'
    
    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navLinkClass = (isHome && !isScrolled) ? 'text-white hover:text-white/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-gray-800 hover:text-purple-600'
    const activeCategory = searchParams.get('category')

    return (
        <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            (isHome && !isScrolled) 
            ? 'bg-transparent' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
        } lg:px-32 px-4`}>
            <div className='flex justify-between items-center lg:py-5 py-3'>
                <Link href={WEBSITE_HOME} className='group'>
                    <Image
                        src={logo}
                        width={383}
                        height={146}
                        alt='Ishori'
                        className='lg:w-80 w-56 transition-transform duration-300 group-hover:scale-105'
                        priority
                    />
                </Link>

                <div className='flex justify-between items-center gap-6'>
                    <nav className={`lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 lg:p-0 ${(isHome && !isScrolled) ? 'bg-transparent' : 'bg-gradient-to-b from-white to-purple-50'} lg:bg-transparent fixed z-50 top-0 w-full h-screen transition-all ${isMobileMenu ? 'left-0' : '-left-full'}`}>
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
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHome ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href="/about-us" onClick={() => setIsMobileMenu(false)} className={`${navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    About
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHome ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHome ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={WEBSITE_SHOP} onClick={() => setIsMobileMenu(false)} className={`${navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Shop
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHome ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHome ? 'bg-white/80' : 'bg-gradient-to-r from-purple-600 to-pink-600'} transition-all duration-300 group-hover:w-full`}></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=silk-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'silk-sarees' ? (isHome ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Silk Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=cotton-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'cotton-sarees' ? (isHome ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Cotton Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=designer-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'designer-sarees' ? (isHome ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Designer Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=bridal-sarees`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'bridal-sarees' ? (isHome ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Bridal Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=party-wear`} onClick={() => setIsMobileMenu(false)} className={`${activeCategory === 'party-wear' ? (isHome ? 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]' : 'text-purple-600') : navLinkClass} font-semibold text-sm tracking-wide transition-all duration-300 py-3 px-2 relative group whitespace-nowrap`}>
                                    Party Wear
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex items-center gap-4'>
                        <button type='button' onClick={() => setShowSearch(!showSearch)} className={`${(isHome && !isScrolled) ? 'text-white/95' : 'text-gray-700'} p-2 rounded-md hover:bg-white/10 transition-colors duration-200`} aria-label='Search'>
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
                                <Link href={USER_DASHBOARD} className={`${(isHome && !isScrolled) ? 'text-white/95' : 'text-gray-800'} transition-colors duration-200 font-medium text-sm tracking-wide`}>
                                    {auth?.name}
                                </Link>
                            </div>
                        ) : (
                            <Link href={WEBSITE_LOGIN} className={`flex items-center gap-2 ${(isHome && !isScrolled) ? 'text-white/95' : 'text-gray-800'} transition-colors duration-200 font-semibold text-sm tracking-wide`}>
                                <VscAccount size={20} />
                                <span className='hidden sm:block'>Login</span>
                            </Link>
                        )}

                        <button type='button' onClick={() => setIsMobileMenu(true)} className={`lg:hidden p-2 rounded-md ${(isHome && !isScrolled) ? 'text-white/95' : 'text-gray-700'} hover:bg-white/10 transition-colors duration-200`} aria-label='Open menu'>
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