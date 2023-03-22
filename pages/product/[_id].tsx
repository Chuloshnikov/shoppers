import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsStarFill, BsInfoCircle } from 'react-icons/bs'; 
import { ship1Img, ship2Img, ship3Img } from '../../public/assets/images';
import Image from 'next/image';


const ProductDetails = () => {
    const router = useRouter();
    const [product, setProduct] = useState<any>({});
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setProduct(router.query);
        setLoading(false);
    },[]);

    console.log(product);
  return (
    <div className='w-full bg-white'>
        <div className='max-w-contentContainer mx-auto flex items-center py-4'>
            <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
                <img src={product.image} alt='productImg'
                className='w-[80%] transform-origin-top-left cursor-move duration-500'
                />
            </div>
            <div className='w-1/3 h-full flex flex-col gap-2'>
                <p className='p-2 text-[#004f9a] text-sm font-semibold 
                border border-[#8D8586] rounded-md'
                >500+ bought since yesterday
                </p>
                <div className='px-2 py-4 border border-[#8D8586] rounded-md flex flex-col gap-6'>
                   <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <button className='px-2 py-[1px] text-[#004f9a] text-sm border-[1px]'>
                                Best seller
                            </button>
                            <button className='px-2 py-[1px] text-[#E53935] text-sm border-[1px] border-[#E53935] rounded-sm'>
                                Rollback
                            </button>
                        </div>
                        <IoMdHeartEmpty className='text-[#8D8586] text-2xl'/>
                   </div>
                   {/* Product Info */}
                    <div>
                        <p className='text-sm underline underline-offset-4'>{product.brand}</p>
                        <p className='text-xl font-semibold text-black'>{product.title}</p>
                        <p className='text-base text-[#8D8586]'>{product.description}</p>
                        <div className='flex gap-2 items-center text-xs mt-2'>
                            <div className='flex gap-1 items-center'>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                            </div>
                            <p>25</p>
                        </div>
                        <div className='flex  items-end gap-2'>
                            <p 
                            className='font-semibold text-2xl text-[#388E3C]'
                            >
                                Now ${product.price}
                            </p>
                            <p
                            className='text-sm text-[#8D8586] line-trough flex items-center gap-1'
                            >
                                ${product.oldPrice} <span><BsInfoCircle/></span>
                            </p>
                        </div>
                    </div>
                    {/* Online info*/}
                    <div>
                        <p>
                            <span className='font-semibold'>$18/mo</span>{" "}
                            <span className='font-bold'>with Affirm</span>{" "}
                            <span className='underline underline-offset-2 cursor-pointer'>Learn how</span>
                        </p>
                        <p className='text-xs text-[#8D8586] flex items-center gap-1'>
                            Price when purchesed online
                            <span>
                                <BsInfoCircle/>
                            </span>
                        </p>
                    </div>
                    {/* Add to cart */}
                    <div className='border-b-[1px] border-b-[#a6a1a2] pb-4'>
                        <button
                        className='w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300'
                        >
                            Add to cart
                        </button>
                    </div>
                    {/* Deliver Options */}
                    <div>
                        <p className='text-base font-semibold'>how do you want your item?</p>
                        <div className='w-full grid grid-cols-3 gap-4 text-xs'>
                            <div className='w-full border border-[#a6a1a2] rounded-md flex flex-col items-center justify-center p-2'>
                                <Image className='w-10' src={ship1Img} alt="shippingImage"/>
                                <p>Shipping</p> 
                                <p>Tomorrow</p> 
                                <p>Free</p> 
                            </div>
                            <div className='w-full border border-[#a6a1a2] rounded-md flex flex-col items-center justify-center p-2'>
                                <Image className='w-10' src={ship2Img} alt="shippingImage"/>
                                <p>Pickup</p> 
                                <p>Tomorrow</p> 
                                <p>Free</p> 
                            </div>
                            <div className='w-full border border-[#a6a1a2] rounded-md flex flex-col items-center justify-center p-2'>
                                <Image className='w-10' src={ship3Img} alt="shippingImage"/>
                                <p>Delivery</p> 
                                <p>Tomorrow</p>  
                            </div>
                        </div>
                        <p className='font-bold text-xs'>
                            Sacramento, 95829{" "}
                            <span className='font-normal underline underline-offset-2 ml-1 cursor-pointer'>
                                Change
                            </span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;