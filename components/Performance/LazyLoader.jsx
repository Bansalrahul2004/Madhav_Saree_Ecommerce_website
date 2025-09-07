'use client'
import React, { Suspense, lazy } from 'react'

// Loading component for lazy loaded components
const LoadingFallback = ({ children, className = "min-h-[200px] flex items-center justify-center" }) => (
  <div className={className}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    {children && <div className="ml-3 text-muted-foreground">{children}</div>}
  </div>
)

// LazyLoader component for better performance
const LazyLoader = ({ 
  component, 
  fallback = null, 
  loadingText = "Loading...",
  className = "min-h-[200px] flex items-center justify-center"
}) => {
  const LazyComponent = lazy(component)
  
  return (
    <Suspense fallback={fallback || <LoadingFallback className={className}>{loadingText}</LoadingFallback>}>
      <LazyComponent />
    </Suspense>
  )
}

// Preload function for critical components
export const preloadComponent = (component) => {
  const Component = lazy(component)
  return Component
}

export default LazyLoader

