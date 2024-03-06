import React from 'react'
import hero1 from '../../image/hero1.png'
import plant1 from '../../image/plant1.png'
import plant2 from '../../image/plant2.png'
import plant3 from '../../image/plant3.png'

export default function SecHero() {
    return (

        <section className='container'>
            <div className='flex gap-3 min-h-64 '>
                {/* text */}
                <div className='w-1/2 mt-40'>
                    <h1 className='text-6xl font-bold text-malachite-800'>FROM PLANT <br />
                        <span className='text-mercury-800'>FOR PLANT</span></h1>
                    {/* button */}

                    <div className='flex gap-3'>
                        <button className='p-3 mt-5 font-semibold text-white bg-malachite-800 rounded-lg'>
                            Add to Cart
                        </button>
                        <button className='p-3 mt-5 font-semibold text-malachite-800 bg-mercury-200 rounded-lg '>
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* image */}
                <div className='w-1/2 mt-10'>
                    <img className='ml-auto' src={hero1} alt="./image/hero1.png" />
                </div>
            </div>
        </section >
    )
}
