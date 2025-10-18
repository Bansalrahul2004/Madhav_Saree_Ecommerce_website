'use client'
import Footer from '@/components/Application/Website/Footer'
import Header from '@/components/Application/Website/Header'
import React from 'react'
import { usePathname } from 'next/navigation'
// Use system fonts to avoid build-time external font fetches

const layout = ({ children }) => {
    return (
        <div>
            <ConditionalHeader />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

// Component to conditionally render header only on home page
const ConditionalHeader = () => {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    
    return isHomePage ? <Header /> : null
}

export default layout