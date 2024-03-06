import React from 'react'
import search from '../../assets/vector/search.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-slate-50 space-x-7">
            <div className="container flex">
                {/* logo */}
                <a href="/" className='basis-1/4'>
                    Logo
                </a>

                {/* menus */}
                <div className='basis-1/2 flex justify-center text-malachite-900'>
                    <NavLink to='/' className="btn btn-ghost text-xl">Home</NavLink>
                    <NavLink to='/about' className="btn btn-ghost text-xl">About Us</NavLink>
                    <NavLink to='/product' className="btn btn-ghost text-xl">Products</NavLink>
                    <a className="btn btn-ghost text-xl">Contact</a>
                </div>

                {/* search */}
                < div className='gap-2 image ml-auto flex basis-1/4 flex justify-end' >
                    <input type="text" />
                    <img className='size-8' src={search} alt="search" />
                </div >
            </div>
        </div >
    )
}

// cara menggil file untuk file app.jsx
// codenya: rfc > 
