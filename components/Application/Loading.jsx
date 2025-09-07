import React from 'react'

const Loading = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-start mt-12'>
            {/* Simple loading spinner instead of SVG */}
            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
        </div>
    )
}

export default Loading