import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/images/logo-black.png'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";

import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_REGISTER, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
const Footer = () => {
    return (
        <footer className='bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 border-t border-purple-100 shadow-lg'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-12 py-16 lg:px-32 px-4'>

                <div className='lg:col-span-1 md:col-span-2 col-span-1'>
                    <Link href={WEBSITE_HOME} className='group inline-block mb-4'>
                        <Image
                            src={logo}
                            width={383}
                            height={146}
                            alt='Ishori'
                            className='w-40 transition-transform duration-300 group-hover:scale-105'
                        />
                    </Link>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                        Your premier destination for exquisite sarees. From traditional silk to contemporary designer pieces, we bring the finest collection of sarees to your doorstep. Discover elegance, embrace tradition — only at Ishori.
                    </p>
                </div>


                <div>
                    <h4 className='text-xl font-bold uppercase mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Categories</h4>
                    <ul className='space-y-3'>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=silk-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Silk Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=cotton-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Cotton Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=designer-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Designer Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=bridal-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Bridal Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=party-wear`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Party Wear</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Useful Links</h4>
                    <ul className='space-y-3'>
                        <li>
                            <Link href={WEBSITE_HOME} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Home</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_SHOP} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Shop</Link>
                        </li>
                        <li>
                            <Link href="/about-us" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>About</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_REGISTER} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Register</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_LOGIN} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Login</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Help Center</h4>
                    <ul className='space-y-3'>
                        <li>
                            <Link href={WEBSITE_REGISTER} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Register</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_LOGIN} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Login</Link>
                        </li>
                        <li>
                            <Link href={USER_DASHBOARD} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>My Account</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium'>Terms & Conditions</Link>
                        </li>


                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Contact Us</h4>
                    <ul className='space-y-4'>
                        <li className='flex gap-3 items-start'>
                            <div className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mt-1'>
                                <IoLocationOutline size={18} className='text-purple-600' />
                            </div>
                            <span className='text-sm text-gray-600 leading-relaxed'>Ishori, Near old nagar Palika, Kotputli 303108</span>
                        </li>
                        <li className='flex gap-3 items-center'>
                            <div className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100'>
                                <MdOutlinePhone size={18} className='text-purple-600' />
                            </div>
                            <Link href="tel:+91-94148235569" className='hover:text-purple-600 text-sm font-medium transition-colors duration-300'>+91-94148235569</Link>
                        </li>
                        <li className='flex gap-3 items-center'>
                            <div className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100'>
                                <MdOutlinePhone size={18} className='text-purple-600' />
                            </div>
                            <Link href="tel:+91-9799522244" className='hover:text-purple-600 text-sm font-medium transition-colors duration-300'>+91-9799522244</Link>
                        </li>
                        <li className='flex gap-3 items-center'>
                            <div className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100'>
                                <MdOutlineMail size={18} className='text-purple-600' />
                            </div>
                            <Link href="mailto:rakshit1805@gmail.com" className='hover:text-purple-600 text-sm font-medium transition-colors duration-300'>rakshit1805@gmail.com</Link>
                        </li>

                    </ul>


                    <div className='flex gap-4 mt-8'>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <AiOutlineYoutube className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={22} />
                        </Link>
                        <Link href="https://www.instagram.com/madhavsarees.official/" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <FaInstagram className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={22} />
                        </Link>
                        <Link href="" className='p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <FaWhatsapp className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={22} />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61578129207546" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <TiSocialFacebookCircular className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={22} />
                        </Link>
                        <Link href="" className='p-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <FiTwitter className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={22} />
                        </Link>

                    </div>

                </div>

            </div>


            <div className='py-6 bg-gradient-to-r from-purple-600 to-pink-600' >
                <p className='text-center text-white font-medium'>© 2024 Ishori. All Rights Reserved.</p>
                <p className='text-center text-white text-sm mt-2'>
                    Developed by{' '}
                    <a 
                        href="https://rahul-bansalportfolio.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='hover:text-purple-200 transition-colors duration-300 underline'
                    >
                        Rahul Bansal
                    </a>
                </p>
            </div>

        </footer>
    )
}

export default Footer