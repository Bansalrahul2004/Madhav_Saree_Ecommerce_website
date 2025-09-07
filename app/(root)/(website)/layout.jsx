import Footer from '@/components/Application/Website/Footer'
import Header from '@/components/Application/Website/Header'
import React from 'react'
// Use system fonts to avoid build-time external font fetches

const layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout