'use client'
import { persistor, store } from '@/store/store'
import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import Loading from './Loading'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Lazy load React Query DevTools only in development
const ReactQueryDevtools = process.env.NODE_ENV === 'development' 
  ? lazy(() => import('@tanstack/react-query-devtools').then(mod => ({ default: mod.ReactQueryDevtools })))
  : () => null

// Optimize QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

const GlobalProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<Loading />}>
                    {children}
                </PersistGate>
            </Provider>
            {/* Only load DevTools in development */}
            {process.env.NODE_ENV === 'development' && (
                <Suspense fallback={null}>
                    <ReactQueryDevtools initialIsOpen={false} />
                </Suspense>
            )}
        </QueryClientProvider>
    )
}

export default GlobalProvider