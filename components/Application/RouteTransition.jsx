'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RouteTransition = ({ children }) => {
    const pathname = usePathname()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 100)
        return () => clearTimeout(timer)
    }, [pathname])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default RouteTransition

