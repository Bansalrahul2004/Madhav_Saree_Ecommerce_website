'use client'
import ButtonLoading from '@/components/Application/ButtonLoading'
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useFetch from '@/hooks/useFetch'
import { showToast } from '@/lib/showToast'
import { zSchema } from '@/lib/zodSchema'
import { WEBSITE_ORDER_DETAILS, WEBSITE_PRODUCT_DETAILS, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import { addIntoCart, clearCart } from '@/store/reducer/cartReducer'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useActionState, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseCircleSharp } from "react-icons/io5";
import { z } from 'zod'
import { FaShippingFast } from "react-icons/fa";
import { Textarea } from '@/components/ui/textarea'
import Script from 'next/script'
import { useRouter } from 'next/navigation'

// Loading component will be handled inline
const breadCrumb = {
    title: 'Checkout',
    links: [
        { label: "Checkout" }
    ]
}
const Checkout = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cartStore)
    const authStore = useSelector(store => store.authStore)
    const [verifiedCartData, setVerifiedCartData] = useState([])
    const { data: getVerifiedCartData } = useFetch('/api/cart-verification', 'POST', { data: cart.products })

    const [isCouponApplied, setIsCouponApplied] = useState(false)
    const [subtotal, setSubTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [couponDiscountAmount, setCouponDiscountAmount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [couponLoading, setCouponLoading] = useState(false)
    const [couponCode, setCouponCode] = useState('')

    const [placingOrder, setPlacingOrder] = useState(false)
    const [savingOrder, setSavingOrder] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('online')
    useEffect(() => {
        if (getVerifiedCartData && getVerifiedCartData.success) {
            const cartData = getVerifiedCartData.data
            setVerifiedCartData(cartData)
            dispatch(clearCart())
            cartData.forEach(cartItem => {
                dispatch(addIntoCart(cartItem))
            });
        }
    }, [getVerifiedCartData])


    useEffect(() => {
        const cartProducts = Array.isArray(cart?.products) ? cart.products.filter(Boolean) : []

        const subTotalAmount = cartProducts.reduce((sum, product) => sum + (((product?.sellingPrice) || 0) * ((product?.qty) || 0)), 0)

        const discount = cartProducts.reduce((sum, product) => sum + ((((product?.mrp) || 0) - ((product?.sellingPrice) || 0)) * ((product?.qty) || 0)), 0)

        setSubTotal(subTotalAmount)
        setDiscount(discount)
        setTotalAmount(subTotalAmount)

        couponForm.setValue('minShoppingAmount', subTotalAmount)

    }, [cart])



    // coupon form 

    const couponFormSchema = zSchema.pick({
        code: true,
        minShoppingAmount: true
    })

    const couponForm = useForm({
        resolver: zodResolver(couponFormSchema),
        defaultValues: {
            code: "",
            minShoppingAmount: subtotal
        }
    })

    const applyCoupon = async (values) => {
        setCouponLoading(true)
        try {
            const { data: response } = await axios.post('/api/coupon/apply', values)
            if (!response.success) {
                throw new Error(response.message)
            }

            const discountPercentage = response.data.discountPercentage
            // get coupon discount amount 
            setCouponDiscountAmount((subtotal * discountPercentage) / 100)
            setTotalAmount(subtotal - ((subtotal * discountPercentage) / 100))
            showToast('success', response.message)
            setCouponCode(couponForm.getValues('code'))
            setIsCouponApplied(true)

            couponForm.resetField('code', '')
        } catch (error) {
            showToast('error', error.message)
        } finally {
            setCouponLoading(false)
        }
    }

    const removeCoupon = () => {
        setIsCouponApplied(false)
        setCouponCode('')
        setCouponDiscountAmount(0)
        setTotalAmount(subtotal)
    }


    // place order 
    const orderFormSchema = zSchema.pick({
        name: true,
        email: true,
        phone: true,
        country: true,
        state: true,
        city: true,
        pincode: true,
        landmark: true,
        ordernote: true
    }).extend({
        userId: z.string().optional()
    })

    const orderForm = useForm({
        resolver: zodResolver(orderFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            country: '',
            state: '',
            city: '',
            pincode: '',
            landmark: '',
            ordernote: '',
            userId: authStore?.auth?._id,
        }
    })


    useEffect(() => {
        if (authStore) {
            orderForm.setValue('userId', authStore?.auth?._id)
        }
    }, [authStore])

    // get order id 
    const getOrderId = async (amount) => {
        try {
            const { data: orderIdData } = await axios.post('/api/payment/get-order-id', { amount })
            if (!orderIdData.success) {
                throw new Error(orderIdData.message)
            }

            return { success: true, order_id: orderIdData.data }

        } catch (error) {
            return { success: false, message: error.message }
        }
    }

    const placeOrder = async (formData) => {
        setPlacingOrder(true)
        try {
            const products = verifiedCartData.map((cartItem) => (
                {
                    productId: cartItem.productId,
                    variantId: cartItem.variantId,
                    name: cartItem.name,
                    qty: cartItem.qty,
                    mrp: cartItem.mrp,
                    sellingPrice: cartItem.sellingPrice,
                }
            ))

            if (paymentMethod === 'cod') {
                // Handle COD order
                const { data: codResponseData } = await axios.post('/api/payment/save-cod-order', {
                    ...formData,
                    products: products,
                    subtotal: subtotal,
                    discount: discount,
                    couponDiscountAmount: couponDiscountAmount,
                    totalAmount: totalAmount
                })

                if (codResponseData.success) {
                    showToast('success', codResponseData.message)
                    dispatch(clearCart())
                    orderForm.reset()
                    router.push(WEBSITE_ORDER_DETAILS(codResponseData.data))
                    setPlacingOrder(false)
                } else {
                    throw new Error(codResponseData.message)
                }
            } else {
                // Handle online payment
                const generateOrderId = await getOrderId(totalAmount)
                if (!generateOrderId.success) {
                    throw new Error(generateOrderId.message)
                }

                const order_id = generateOrderId.order_id

                const razOption = {
                    "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                    "amount": totalAmount * 100,
                    "currency": "INR",
                    "name": "E-store",
                    "description": "Payment for order",
                    "image": "https://res.cloudinary.com/dg7efdu9o/image/upload/v1750052410/logo-black_mb1rve.webp",
                    "order_id": order_id,
                    "handler": async function (response) {
                        setSavingOrder(true)
                        const { data: paymentResponseData } = await axios.post('/api/payment/save-order', {
                            ...formData,
                            ...response,
                            products: products,
                            subtotal: subtotal,
                            discount: discount,
                            couponDiscountAmount: couponDiscountAmount,
                            totalAmount: totalAmount
                        })

                        if (paymentResponseData.success) {
                            showToast('success', paymentResponseData.message)
                            dispatch(clearCart())
                            orderForm.reset()
                            router.push(WEBSITE_ORDER_DETAILS(response.razorpay_order_id))
                            setSavingOrder(false)
                        } else {
                            showToast('error', paymentResponseData.message)
                            setSavingOrder(false)
                        }
                    },
                    "prefill": {
                        "name": formData.name,
                        "email": formData.email,
                        "contact": formData.phone
                    },
                    "theme": {
                        "color": "#7c3aed"
                    }
                }

                const rzp = new Razorpay(razOption)
                rzp.on('payment.failed', function (response) {
                    showToast('error', response.error.description)
                });

                rzp.open()
            }

        } catch (error) {
            showToast('error', error.message)
        } finally {
            setPlacingOrder(false)
        }
    }

    return (
        <div>

            {savingOrder &&
                <div className='h-screen w-screen fixed top-0 left-0 z-50 bg-black/10'>
                    <div className='h-screen flex justify-center items-center'>
                        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900 mr-4"></div>
                        <h4 className='font-semibold'>Order Confirming...</h4>
                    </div>
                </div>
            }

            <WebsiteBreadcrumb props={breadCrumb} />
            {cart.count === 0
                ?
                <div className='w-screen h-[500px] flex justify-center items-center py-32'>
                    <div className='text-center'>
                        <h4 className='text-4xl font-semibold mb-5'>Your cart is empty!</h4>

                        <Button type="button" asChild>
                            <Link href={WEBSITE_SHOP}>Continue Shopping</Link>
                        </Button>

                    </div>
                </div>
                :
                <div className='flex lg:flex-nowrap flex-wrap gap-10 my-20 lg:px-32 px-4'>
                    <div className='lg:w-[60%] w-full'>
                        <div className='flex font-semibold gap-2 items-center'>
                            <FaShippingFast size={25} /> Shipping Address:
                        </div>
                        <div className='mt-5'>

                            <Form {...orderForm}>
                                <form className='grid grid-cols-2 gap-5' onSubmit={orderForm.handleSubmit(placeOrder)}>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='name'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Full name*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='email'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input type="email" placeholder="Email*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='phone'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Phone*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='country'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Country*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='state'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="State*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='city'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="City*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='pincode'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Pincode*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3'>
                                        <FormField
                                            control={orderForm.control}
                                            name='landmark'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Landmark*" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >

                                        </FormField>
                                    </div>
                                    <div className='mb-3 col-span-2'>
                                        <FormField
                                            control={orderForm.control}
                                            name='ordernote'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea placeholder="Enter order note" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        >
                                        </FormField>
                                    </div>

                                    {/* Payment Method Selection */}
                                    <div className='mb-3 col-span-2'>
                                        <div className='mb-2'>
                                            <label className='text-sm font-medium'>Payment Method *</label>
                                        </div>
                                        <div className='flex gap-4'>
                                            <label className='flex items-center gap-2 cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 hover:bg-gray-50'>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="online"
                                                    checked={paymentMethod === 'online'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className='w-4 h-4 text-blue-600'
                                                />
                                                <div>
                                                    <span className='font-medium'>Online Payment (Razorpay)</span>
                                                    <p className='text-xs text-gray-600'>Pay securely with cards, UPI, or wallets</p>
                                                </div>
                                            </label>
                                            <label className='flex items-center gap-2 cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 hover:bg-gray-50'>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cod"
                                                    checked={paymentMethod === 'cod'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className='w-4 h-4 text-blue-600'
                                                />
                                                <div>
                                                    <span className='font-medium'>Cash on Delivery (COD)</span>
                                                    <p className='text-xs text-gray-600'>Pay when you receive your order</p>
                                                </div>
                                            </label>
                                        </div>
                                        {paymentMethod === 'cod' && (
                                            <div className='mt-2 p-3 bg-orange-50 border border-orange-200 rounded-lg'>
                                                <p className='text-sm text-orange-800'>
                                                    <strong>Note:</strong> COD orders may have additional charges and longer delivery times. 
                                                    Please ensure you have exact change ready for delivery.
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className='mb-3'>
                                        <ButtonLoading 
                                            type="submit" 
                                            text={paymentMethod === 'cod' ? "Place COD Order" : "Proceed to Payment"} 
                                            loading={placingOrder} 
                                            className="bg-black rounded-full px-5 cursor-pointer" 
                                        />
                                    </div>

                                </form>
                            </Form>
                        </div>

                    </div>
                    <div className='lg:w-[40%] w-full'>
                        <div className='rounded bg-gray-50 p-5 sticky top-5'>
                            <h4 className='text-lg font-semibold mb-5'>Order Summary</h4>
                            <div>

                                <table className='w-full border'>
                                    <tbody>
                                        {(Array.isArray(verifiedCartData) ? verifiedCartData.filter(Boolean) : []).map(product => (
                                            <tr key={product?.variantId || Math.random()}>
                                                <td className='p-3'>
                                                    <div className='flex items-center gap-5'>
                                                        <Image src={product?.media} width={60} height={60} alt={product?.name || 'Product'} className='rounded' />
                                                        <div>
                                                            <h4 className='font-medium line-clamp-1'>
                                                                <Link href={WEBSITE_PRODUCT_DETAILS(product?.url)}>{product?.name || 'Unnamed item'}</Link>
                                                            </h4>
                                                            <p className='text-sm'>Color: {product?.color || '-'}</p>
                                                            <p className='text-sm'>Size: {product?.size || '-'}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='p-3 text-center'>
                                                    <p className='text-nowrap text-sm'>
                                                        {(product?.qty || 0)} x {((product?.sellingPrice) || 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                                    </p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <table className='w-full'>
                                    <tbody>
                                        <tr>
                                            <td className='font-medium py-2'>Subtotal</td>
                                            <td className='text-end py-2'>
                                                {subtotal.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='font-medium py-2'>Discount</td>
                                            <td className='text-end py-2'>
                                                - {discount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='font-medium py-2'>Coupon Discount</td>
                                            <td className='text-end py-2'>
                                                -  {couponDiscountAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='font-medium py-2 text-xl'>Total</td>
                                            <td className='text-end py-2'>
                                                {totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Payment Method Display */}
                                <div className='mt-2 mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200'>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-sm font-medium'>Payment Method:</span>
                                        <span className={`text-sm px-2 py-1 rounded-full ${
                                            paymentMethod === 'cod' 
                                                ? 'bg-orange-100 text-orange-800 border border-orange-200' 
                                                : 'bg-green-100 text-green-800 border border-green-200'
                                        }`}>
                                            {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                                        </span>
                                    </div>
                                    {paymentMethod === 'cod' && (
                                        <div className='mt-2'>
                                            <p className='text-xs text-gray-600 mb-1'>
                                                Pay when you receive your order
                                            </p>
                                            <div className='p-2 bg-orange-100 border border-orange-200 rounded text-xs text-orange-800'>
                                                <strong>COD Info:</strong> Additional charges may apply. Delivery time: 3-7 business days.
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className='mt-2 mb-5'>
                                    {!isCouponApplied
                                        ?
                                        <Form {...couponForm}>
                                            <form className='flex justify-between gap-5' onSubmit={couponForm.handleSubmit(applyCoupon)}>
                                                <div className='w-[calc(100%-100px)]'>
                                                    <FormField
                                                        control={couponForm.control}
                                                        name='code'
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input placeholder="Enter coupon code" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    >

                                                    </FormField>
                                                </div>
                                                <div className='w-[100px]'>
                                                    <ButtonLoading type="submit" text="Apply" className="w-full cursor-pointer" loading={couponLoading} />
                                                </div>
                                            </form>
                                        </Form>
                                        :
                                        <div className='flex justify-between py-1 px-5 rounded-lg bg-gray-200'>
                                            <div>
                                                <span className='text-xs'>Coupon:</span>
                                                <p className='text-sm font-semibold'>{couponCode}</p>
                                            </div>
                                            <button type='button' onClick={removeCoupon} className='text-red-500 cursor-pointer'>
                                                <IoCloseCircleSharp size={25} />
                                            </button>
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

            {paymentMethod === 'online' && (
                <Script src='https://checkout.razorpay.com/v1/checkout.js' />
            )}
        </div>
    )
}

export default Checkout