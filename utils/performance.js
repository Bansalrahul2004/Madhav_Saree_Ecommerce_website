// Performance monitoring and optimization utilities

// Measure Core Web Vitals
export const measureCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay (FID)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });

  // Cumulative Layout Shift (CLS)
  new PerformanceObserver((entryList) => {
    let clsValue = 0;
    const entries = entryList.getEntries();
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log('CLS:', clsValue);
  }).observe({ entryTypes: ['layout-shift'] });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    // Add critical resources here
    // '/api/critical-data',
    // '/images/hero.webp'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.js') ? 'script' : 'fetch';
    document.head.appendChild(link);
  });
};

// Optimize images
export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Measure Core Web Vitals
  measureCoreWebVitals();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Optimize images
  optimizeImages();
  
  // Add performance event listeners
  window.addEventListener('load', () => {
    // Performance optimizations after page load
    console.log('Page loaded, performance optimizations applied');
  });
};

export default {
  measureCoreWebVitals,
  preloadCriticalResources,
  optimizeImages,
  debounce,
  throttle,
  initPerformanceOptimizations
};

