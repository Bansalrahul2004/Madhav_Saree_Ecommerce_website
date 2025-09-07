import dynamic from 'next/dynamic'

// Dynamic imports for heavy components
export const DynamicEditor = dynamic(
    () => import('@/components/Application/Admin/Editor'),
    {
        loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
        ssr: false
    }
)

export const DynamicChart = dynamic(
    () => import('@/components/ui/chart'),
    {
        loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded"></div>,
        ssr: false
    }
)

export const DynamicMaterialTable = dynamic(
    () => import('material-react-table'),
    {
        loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>,
        ssr: false
    }
)

export const DynamicCKEditor = dynamic(
    () => import('@ckeditor/ckeditor5-react'),
    {
        loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
        ssr: false
    }
)

// Route-based code splitting
export const DynamicAdminDashboard = dynamic(
    () => import('@/app/(root)/(admin)/admin/dashboard/page'),
    {
        loading: () => <div className="animate-pulse bg-gray-200 h-screen"></div>
    }
)

export const DynamicShopPage = dynamic(
    () => import('@/app/(root)/(website)/shop/page'),
    {
        loading: () => <div className="animate-pulse bg-gray-200 h-screen"></div>
    }
)

// Utility function for conditional dynamic imports
export const createDynamicComponent = (importFn, options = {}) => {
    return dynamic(importFn, {
        loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
        ssr: false,
        ...options
    })
}










