'use client'
import { useEffect } from 'react';

// Performance optimization component
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Initialize performance optimizations
    import('@/utils/performance').then(({ initPerformanceOptimizations }) => {
      initPerformanceOptimizations();
    });
  }, []);
  
  return null;
}
