import React from 'react'
import IllustrationHero from "../assets/images/illustration-hero.svg"
import IconMusic from "../assets/images/icon-music.svg"
import PatternBackground from "../assets/images/pattern-background-mobile.svg"

const Card = () => {
    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[#7280a7]'>
            <div className='w-[350px] h-[500px] bg-[#f5f7ff] flex gap-2 flex-col items-center rounded-2xl'>
                <div className='h-[30%] w-full '>
                    <img src={IllustrationHero} alt="" className='rounded-t-2xl h-full w-full object-fill' />
                </div>
                <div className='h-[65%] w-[90%] flex flex-col gap-1'>
                    <div className='h-[10%] '>
                        <h1 className='font-bold text-2xl text-center font-RedHatDisplay'>Order Summary</h1>
                    </div>
                    <div className='h-[30%]  text-center font-RedHatDisplay'>
                        <p className='text-[#7280a7]'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like</p>
                    </div>
                    <div className='h-[30%] flex justify-between bg-gray-150 rounded-xl'>

                        <div className='w-[20%]  flex justify-center items-center'>
                            <img src={IconMusic} alt="IconMusic" />
                        </div>
                        <div className='h-[100%] w-[40%]  flex flex-col justify-center items-center'>
                            <div className='w-full h-[30%] flex items-center font-semibold'>Annual Plan</div>
                            <div className='w-full h-[30%]  flex items-center text-[#7280a7]'>$59.99/year</div>
                        </div>
                        <div className='w-[20%]  flex justify-center items-center'>
                            <p className='underline font-RedHatDisplay text-[#3829e0] cursor-pointer hover:text-[#6b60e9]'>Change</p>
                        </div>
                    </div>
                    <div className='h-[15%]  bg-[#3829e0] rounded-xl flex justify-center items-center hover:bg-[#6b60e9]'>
                        <p className='font-bold font-RedHatDisplay text-white cursor-pointer '>Proceed to Payment</p>
                    </div>
                    <div className='h-[15%] flex justify-center items-center'>
                        <p className='text-center font-RedHatDisplay font-bold text-[#7280a7] cursor-pointer hover:text-black'>Cancel Order</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card