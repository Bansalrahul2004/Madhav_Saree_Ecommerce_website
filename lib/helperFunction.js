
import { NextResponse } from "next/server"

export const response = (success, statusCode, message, data = {}) => {
    return NextResponse.json({
        success, statusCode, message, data
    })
}

export const catchError = (error, customMessage) => {
    console.error('Error caught:', error)
    
    // handling duplicate key error 
    if (error.code === 11000) {
        const keys = Object.keys(error.keyPattern).join(',')
        error.message = `Duplicate fields: ${keys}. These fields value must be unique.`
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message).join(', ')
        error.message = `Validation Error: ${validationErrors}`
    }

    // Handle cast errors
    if (error.name === 'CastError') {
        error.message = `Invalid ${error.path}: ${error.value}`
    }

    let errorObj = {}

    if (process.env.NODE_ENV === 'development') {
        errorObj = {
            message: error.message,
            error: {
                name: error.name,
                code: error.code,
                message: error.message,
                stack: error.stack
            }
        }
    } else {
        errorObj = {
            message: customMessage || error.message || 'Internal server error.',
        }
    }

    return NextResponse.json({
        success: false,
        statusCode: error.statusCode || error.code || 500,
        ...errorObj
    })

}

export const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    return otp
}


export const columnConfig = (column, isCreatedAt = false, isUpdatedAt = false, isDeletedAt = false) => {
    const newColumn = [...column]

    if (isCreatedAt) {
        newColumn.push({
            accessorKey: 'createdAt',
            header: 'Created At',
            Cell: ({ renderedCellValue }) => (new Date(renderedCellValue).toLocaleString())
        })
    }
    if (isUpdatedAt) {
        newColumn.push({
            accessorKey: 'updatedAt',
            header: 'Updated At',
            Cell: ({ renderedCellValue }) => (new Date(renderedCellValue).toLocaleString())
        })
    }
    if (isDeletedAt) {
        newColumn.push({
            accessorKey: 'deletedAt',
            header: 'Deleted At',
            Cell: ({ renderedCellValue }) => (new Date(renderedCellValue).toLocaleString())
        })
    }

    return newColumn
}

export const statusBadge = (status) => {
    const statusColorConfig = {
        pending: 'bg-blue-500',
        processing: 'bg-yellow-500',
        shipped: 'bg-cyan-500',
        delivered: 'bg-green-500',
        cancelled: 'bg-red-500',
        unverified: 'bg-orange-500',
    }
    return <span className={`${statusColorConfig[status]} capitalize px-3 py-1 rounded-full text-xs`}>{status}</span>
}