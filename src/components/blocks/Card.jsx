import React from 'react'
import plant1 from '../../image/plant1.png'
import plant2 from '../../image/plant2.png'
import plant3 from '../../image/plant3.png'

export default function Card() {
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-60 w-40' src={plant1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-malachite-800 text-white">Buy Now $14</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-60 w-40' src={plant2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-malachite-800 text-white">Buy Now $10</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-60 w-40' src={plant2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-malachite-800 text-white">Buy Now $8</button>
                    </div>
                </div>
            </div>

        </>
    )
}
