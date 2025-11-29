'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }

    // Preload critical resources
    const preloadResources = [
      '/images/hero-background-bubbles.svg',
      '/images/og-image.png',
    ]

    preloadResources.forEach((resource) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = resource.includes('.svg') ? 'image' : 'image'
      link.href = resource
      document.head.appendChild(link)
    })

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (perfData) {
            // Log performance metrics for debugging
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.startTime)
            console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.startTime)
            console.log('Response Time:', perfData.responseEnd - perfData.startTime)
          }
        }, 0)
      })
    }
  }, [])

  return null
}