import { useEffect, useState, useCallback } from 'react'

export const usePerformance = () => {
    const [metrics, setMetrics] = useState({})
    const [isMonitoring, setIsMonitoring] = useState(false)

    // Measure page load performance
    const measurePageLoad = useCallback(() => {
        if (typeof window === 'undefined') return

        const navigation = performance.getEntriesByType('navigation')[0]
        const paint = performance.getEntriesByType('paint')
        const resource = performance.getEntriesByType('resource')

        const pageMetrics = {
            // Navigation timing
            domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
            loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
            domInteractive: navigation?.domInteractive,
            
            // Paint timing
            firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
            
            // Resource timing
            totalResources: resource.length,
            slowResources: resource.filter(r => r.duration > 1000).length,
            
            // Memory usage (if available)
            memory: performance.memory ? {
                used: Math.round(performance.memory.usedJSHeapSize / 1048576),
                total: Math.round(performance.memory.totalJSHeapSize / 1048576),
                limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
            } : null
        }

        setMetrics(pageMetrics)
        return pageMetrics
    }, [])

    // Monitor API performance
    const measureAPI = useCallback((url, startTime) => {
        const endTime = performance.now()
        const duration = endTime - startTime

        if (duration > 2000) {
            console.warn(`⚠️ Slow API call to ${url}: ${duration.toFixed(2)}ms`)
        }

        return duration
    }, [])

    // Start performance monitoring
    const startMonitoring = useCallback(() => {
        if (typeof window === 'undefined') return

        setIsMonitoring(true)
        
        // Monitor long tasks
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 50) {
                    console.warn(`⚠️ Long task detected: ${entry.duration.toFixed(2)}ms`)
                }
            }
        })

        observer.observe({ entryTypes: ['longtask'] })

        // Monitor layout shifts
        const layoutObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.value > 0.1) {
                    console.warn(`⚠️ Layout shift detected: ${entry.value.toFixed(3)}`)
                }
            }
        })

        layoutObserver.observe({ entryTypes: ['layout-shift'] })

        return () => {
            observer.disconnect()
            layoutObserver.disconnect()
        }
    }, [])

    // Optimize images
    const optimizeImages = useCallback(() => {
        if (typeof window === 'undefined') return

        const images = document.querySelectorAll('img')
        images.forEach(img => {
            // Add loading="lazy" to images below the fold
            if (img.getBoundingClientRect().top > window.innerHeight) {
                img.loading = 'lazy'
            }
            
            // Add decoding="async" for better performance
            img.decoding = 'async'
        })
    }, [])

    // Debounce function for performance
    const debounce = useCallback((func, wait) => {
        let timeout
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout)
                func(...args)
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
        }
    }, [])

    useEffect(() => {
        // Measure initial page load
        if (document.readyState === 'complete') {
            measurePageLoad()
        } else {
            window.addEventListener('load', measurePageLoad)
        }

        // Start monitoring
        const cleanup = startMonitoring()

        // Optimize images after load
        setTimeout(optimizeImages, 1000)

        return () => {
            window.removeEventListener('load', measurePageLoad)
            if (cleanup) cleanup()
        }
    }, [measurePageLoad, startMonitoring, optimizeImages])

    return {
        metrics,
        isMonitoring,
        measurePageLoad,
        measureAPI,
        startMonitoring,
        optimizeImages,
        debounce
    }
}


















