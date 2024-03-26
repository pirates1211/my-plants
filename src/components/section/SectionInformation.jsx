import React from 'react'
import backgroundImage from '../../image/bgslide.jpeg'



export default function SectionInformation() {
    return (
        <>
            <div className='flex-auto'>
                <section>
                    <div className="text-center mb-20 pt-20">
                        <h3 className="text-5xl font-bold text-malachite-800">About Us </h3>
                    </div>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>

    )
}
