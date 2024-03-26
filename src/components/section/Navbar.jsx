import React from 'react'
import search from '../../assets/vector/search.png'
import { NavLink } from 'react-router-dom'
import bgnavbarlogo from '../../image/bgnavbarlogo.jpeg'

export default function Navbar() {
    return (
        <div className="navbar bg-slate-50 space-x-7">
            <div className="container flex text-center gap-x-96">
                {/* logo */}
                <img className='size-16 rounded-md flex justify-center ' src={bgnavbarlogo} alt="bgnavbarlogo" />

                {/* menus */}
                <div className='basis-1/2 flex justify-center text-malachite-900'>
                    <NavLink to='/' className="btn btn-ghost text-xl">Home</NavLink>
                    <NavLink to='/product' className="btn btn-ghost text-xl">Products</NavLink>
                    <a className="btn btn-ghost text-xl">Contact</a>
                </div>

                {/* search */}
                < div className='gap-2 image ml-auto flex-auto basis-1/4 flex justify-end space-x-5' >
                    <input className='border-2 rounded-lg' type="text" />
                    <img className='size-8' src={search} alt="search" />
                </div >
            </div>
        </div >
    )
}

