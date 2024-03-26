import React from 'react'
import Cardproduct from '../components/blocks/Cardproduct'



export default function Product() {
    return (
        <>
            <section className='container mt-32 mb-10'>
                <div className='text-center mt-10 mb-20'>
                    <h3 className='text-5xl font-bold text-malachite-800'>Product</h3>
                </div>
                <div className='grid gap-4 grid-cols-2'>
                    <Cardproduct />
                </div>
            </section>
        </>
    )
}
