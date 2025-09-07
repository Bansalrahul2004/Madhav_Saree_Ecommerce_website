'use client'
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
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

const Header = () => {
    const auth = useSelector(store => store.authStore.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className='bg-gradient-to-r from-white via-purple-50 to-pink-50 border-b border-purple-100 shadow-lg lg:px-32 px-4'>
            <div className='flex justify-between items-center lg:py-6 py-4'>
                <Link href={WEBSITE_HOME} className='group'>
                    <Image
                        src={logo}
                        width={383}
                        height={146}
                        alt='Madhav Saree Sangam'
                        className='lg:w-36 w-28 transition-transform duration-300 group-hover:scale-105'
                        priority
                    />
                </Link>

                <div className='flex justify-between gap-20'>
                    <nav className={`lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 lg:p-0 bg-gradient-to-b from-white to-purple-50 fixed z-50 top-0 w-full h-screen transition-all ${isMobileMenu ? 'left-0' : '-left-full'}`}>
                        <div className='lg:hidden flex justify-between items-center bg-gradient-to-r from-purple-600 to-pink-600 py-4 border-b px-4'>
                            <Image
                                src={logo}
                                width={383}
                                height={146}
                                alt='Madhav Saree Sangam'
                                className='lg:w-32 w-24'
                                priority
                            />
                            <button type='button' onClick={() => setIsMobileMenu(false)} className='text-white hover:text-purple-200 transition-colors duration-300' >
                                <IoMdClose size={28} />
                            </button>
                        </div>

                        <ul className='lg:flex justify-between items-center gap-12 px-4 py-6'>
                            <li className='group'>
                                <Link href={WEBSITE_HOME} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Home
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href="/about-us" className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    About
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={WEBSITE_SHOP} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Shop
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=silk-sarees`} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Silk Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=cotton-sarees`} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Cotton Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=designer-sarees`} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Designer Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=bridal-sarees`} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Bridal Sarees
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li className='group'>
                                <Link href={`${WEBSITE_SHOP}?category=party-wear`} className='block py-3 px-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative'>
                                    Party Wear
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex items-center gap-5'>
                        <button type='button' onClick={() => setShowSearch(!showSearch)} className='text-gray-700 hover:text-purple-600 transition-colors duration-300'>
                            <IoIosSearch size={24} />
                        </button>

                        <Cart />

                        {auth ? (
                            <div className='flex items-center gap-2'>
                                <Avatar className='w-8 h-8'>
                                    <AvatarImage src={auth?.profilePicture || userIcon.src} alt='user' />
                                </Avatar>
                                <Link href={USER_DASHBOARD} className='text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium'>
                                    {auth?.name}
                                </Link>
                            </div>
                        ) : (
                            <Link href={WEBSITE_LOGIN} className='flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium'>
                                <VscAccount size={24} />
                                <span className='hidden sm:block'>Login</span>
                            </Link>
                        )}

                        <button type='button' onClick={() => setIsMobileMenu(true)} className='lg:hidden text-gray-700 hover:text-purple-600 transition-colors duration-300'>
                            <HiMiniBars3 size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <Search isShow={showSearch} />
        </div>
    )
}

export default Header