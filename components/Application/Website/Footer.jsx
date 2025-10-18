import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/images/logo-footer.png'
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
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 py-10 lg:px-16 px-4'>

                <div className='lg:col-span-1 md:col-span-2 col-span-1'>
                    <Link href={WEBSITE_HOME} className='group inline-block mb-3'>
                        <Image
                            src={logo}
                            width={383}
                            height={146}
                            alt='Ishori'
                            className='w-48 lg:w-56 transition-transform duration-300 group-hover:scale-105'
                        />
                    </Link>
                    <p className='text-gray-600 text-xs leading-relaxed'>
                        Your premier destination for exquisite sarees. From traditional silk to contemporary designer pieces, we bring the finest collection of sarees to your doorstep.
                    </p>
                </div>


                <div>
                    <h4 className='text-lg font-bold uppercase mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Categories</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=silk-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Silk Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=cotton-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Cotton Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=designer-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Designer Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=bridal-sarees`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Bridal Sarees</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=party-wear`} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Party Wear</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold uppercase mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Useful Links</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link href={WEBSITE_HOME} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Home</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_SHOP} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Shop</Link>
                        </li>
                        <li>
                            <Link href="/about-us" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>About</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_REGISTER} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Register</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_LOGIN} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Login</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold uppercase mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Help Center</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link href={WEBSITE_REGISTER} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Register</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_LOGIN} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Login</Link>
                        </li>
                        <li>
                            <Link href={USER_DASHBOARD} className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>My Account</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/shipping" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Shipping Policy</Link>
                        </li>
                        <li>
                            <Link href="/cancellation-and-refund" className='text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium'>Cancellation & Refund</Link>
                        </li>


                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold uppercase mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>Contact Us</h4>
                    <ul className='space-y-3'>
                        <li className='flex gap-2 items-start'>
                            <div className='p-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mt-0.5'>
                                <IoLocationOutline size={14} className='text-purple-600' />
                            </div>
                            <span className='text-xs text-gray-600 leading-relaxed'>Ishori, Near old nagar Palika, Kotputli 303108</span>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <div className='p-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100'>
                                <MdOutlinePhone size={14} className='text-purple-600' />
                            </div>
                            <Link href="tel:+918307038989" className='hover:text-purple-600 text-xs font-medium transition-colors duration-300'>+91 8306038989</Link>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <div className='p-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100'>
                                <MdOutlinePhone size={14} className='text-purple-600' />
                            </div>
                            <Link href="tel:+918107708989" className='hover:text-purple-600 text-xs font-medium transition-colors duration-300'>+91 8107708989</Link>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <div className='p-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100'>
                                <MdOutlineMail size={14} className='text-purple-600' />
                            </div>
                            <Link href="mailto:connectishori@gmail.com" className='hover:text-purple-600 text-xs font-medium transition-colors duration-300'>connectishori@gmail.com</Link>
                        </li>

                    </ul>


                    <div className='flex gap-3 mt-6'>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <AiOutlineYoutube className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={18} />
                        </Link>
                        <Link href="https://www.instagram.com/by.ishori?igsh=MXBta2cxenN2NzZvOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <FaInstagram className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={18} />
                        </Link>
                        <Link href="https://wa.me/message/MH6LBQV3FWC4C1" className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <FaWhatsapp className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={18} />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61578129207546" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <TiSocialFacebookCircular className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={18} />
                        </Link>
                        <Link href="" className='p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group'>
                            <FiTwitter className='text-purple-600 group-hover:text-purple-700 transition-colors duration-300' size={18} />
                        </Link>

                    </div>

                </div>

            </div>


            <div className='py-4 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-700/20 to-pink-700/20'></div>
                <div className='relative z-10'>
                    <p className='text-center text-white font-medium text-sm'>© 2025 Ishori. All Rights Reserved.</p>
                    <p className='text-center text-white/90 text-xs mt-1'>
                        Developed by{' '}
                        <a 
                            href="https://rahul-bansalportfolio.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='hover:text-purple-200 transition-colors duration-300 underline decoration-purple-200 hover:decoration-white'
                        >
                            Rahul Bansal
                        </a>
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer