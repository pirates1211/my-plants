import React from 'react';
import Navbar from '../components/section/Navbar';
import About from '../assets/vector/about1.png'
import plant1 from '../image/plant1.png'

export default function SecHero() {
    return (
        <>
            {/* Heading */}
            <div className='container'>
                <div className='flex justify-center mt-14'>
                    <h1 className='text-6xl font-bold text-black'>About Us</h1>
                    <p className='absolute mt-20 font-serif'>Need help to choosing the
                        right plant</p>
                </div>
                {/* card */}
            </div>
            <section>
                <div className='container grid grid-cols-3 gap-10 mt-32'>
                    <div className="card w-92 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="plant1" className="rounded-lg" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
