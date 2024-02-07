import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
const Header = () => {
    const[toggleMenu,setToggleMenu]=useState(false);
  return (
    <header className="flex justify-between px-5 py-2 md:text-center bg-primary ">
        <a href="#" className="font-bold text-2xl">Vinoth Kumar R</a>
        <nav className="hidden md:block">
        <ul className="flex gap-2 text-white nav_head">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col gap-2 text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
    </header>
  )
}

export default Header