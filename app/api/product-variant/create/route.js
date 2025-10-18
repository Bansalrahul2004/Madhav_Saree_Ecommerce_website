import { isAuthenticated } from "@/lib/authentication"
import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import { zSchema } from "@/lib/zodSchema"
import ProductVariantModel from "@/models/ProductVariant.model"

export async function POST(request) {
    try {
        const auth = await isAuthenticated('admin')
        if (!auth.isAuth) {
            return response(false, 403, 'Unauthorized.')
        }

        // Connect to database with error handling
        try {
            await connectDB()
        } catch (dbError) {
            console.error('Database connection error:', dbError)
            return response(false, 500, 'Database connection failed.')
        }

        const payload = await request.json()

        // Validate required fields
        const schema = zSchema.pick({
            product: true,
            sku: true,
            color: true,
            size: true,
            mrp: true,
            sellingPrice: true,
            discountPercentage: true,
            media: true
        })

        const validate = schema.safeParse(payload)
        if (!validate.success) {
            console.error('Validation error:', validate.error)
            return response(false, 400, 'Invalid or missing fields.', validate.error)
        }

        const variantData = validate.data

        // Validate that product exists
        const ProductModel = (await import('@/models/Product.model')).default
        const productExists = await ProductModel.findById(variantData.product)
        if (!productExists) {
            return response(false, 400, 'Product not found.')
        }

        // Validate that media exists
        const MediaModel = (await import('@/models/Media.model')).default
        const mediaExists = await MediaModel.find({ _id: { $in: variantData.media } })
        if (mediaExists.length !== variantData.media.length) {
            return response(false, 400, 'One or more media files not found.')
        }

        // SKU constraint removed - allowing duplicate SKUs

        const newProductVariant = new ProductVariantModel({
            product: variantData.product,
            color: variantData.color,
            size: variantData.size,
            sku: variantData.sku,
            mrp: variantData.mrp,
            sellingPrice: variantData.sellingPrice,
            discountPercentage: variantData.discountPercentage,
            media: variantData.media,
        })

        await newProductVariant.save()

        return response(true, 200, 'Product Variant added successfully.')

    } catch (error) {
        console.error('Product variant creation error:', error)
        return catchError(error, 'Failed to create product variant. Please try again.')
    }
}