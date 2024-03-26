import React from 'react'
import plant1 from '../../image/plant1.png'
import photo2 from '../../image/photo2.jpeg'
import photo3 from '../../image/photo3.jpeg'
import photo4 from '../../image/photo4.jpeg'
import backgroundImage from '../../image/bgslide.jpeg'
import bgslide2 from '../../image/bgslide2.jpeg'
import videoBg from '../../video/bgvideo1.mp4'

export default function w() {
    return (
        <>
            <div className="text-center mb-20 pt-20">
                <h3 className="text-5xl font-bold text-malachite-800">Testimoni </h3>
            </div>
            {/* card image */}
            <div className='grid gap-x-20 gap-y-10 grid-cols-3 mb-16'>
                <section class="py-10 bg-white sm:py-5 lg:py-5">
                    <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div class="md:flex md:items-center md:justify-center md:space-x-8">
                            <div class="relative flex-shrink-0 w-48 h-48">
                                <div class="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                                <img class="relative object-cover w-48 h-48 rounded-full" src={photo2} alt="bgphoto" />
                            </div>
                            <div class="mt-10 md:mt-0">
                                <blockquote>
                                    <p class="text-sm text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                                </blockquote>
                                <p class="text-lg font-semibold text-black mt-7">Jenny Wilson</p>
                                <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-10 bg-white sm:py-5 lg:py-5">
                    <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div class="md:flex md:items-center md:justify-center md:space-x-8">
                            <div class="relative flex-shrink-0 w-48 h-48">
                                <div class="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                                <img class="relative object-cover w-48 h-48 rounded-full" src={photo3} alt="bgphoto" />
                            </div>
                            <div class="mt-10 md:mt-0">
                                <blockquote>
                                    <p class="text-sm text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                                </blockquote>
                                <p class="text-lg font-semibold text-black mt-7">Jenny Wilson</p>
                                <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-10 bg-white sm:py-5 lg:py-5">
                    <div class="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div class="md:flex md:items-center md:justify-center md:space-x-8">
                            <div class="relative flex-shrink-0 w-48 h-48">
                                <div class="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                                <img class="relative object-cover w-48 h-48 rounded-full" src={photo4} alt="bgphoto" />
                            </div>
                            <div class="mt-10 md:mt-0">
                                <blockquote>
                                    <p class="text-sm text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                                </blockquote>
                                <p class="text-lg font-semibold text-black mt-7">Jenny Wilson</p>
                                <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            {/* section video & about */}
            <div className=' grid gap-2 grid-cols-2 mb-10 rounded-full'>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgslide2})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
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
            </div>



        </>
    )
}
