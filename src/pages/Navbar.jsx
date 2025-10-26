import { useEffect } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  return (
    <div id='navbar' className='absolute top-0 left-0 w-full z-[50] bg-white/10'>
      {/* Desktop Layout - hidden on mobile */}
      <div className='hidden md:flex h-[70px] justify-between items-center px-8'>
        {/* Left section */}
        <div className="text-amber-50 flex gap-x-4">
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>
        
        {/* Center (Nibbles) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#hero" className="text-amber-50 font-semibold">
            Nibbles
          </a>
        </div>
        
        {/* Right section */}
        <div className="text-amber-50 flex gap-x-4">
          <a href="#about">About Us</a>
          <a href="#home">Home</a>
        </div>
      </div>

      {/* Mobile Layout - visible only on mobile */}
      <div className='md:hidden flex flex-col items-center py-4'>
        {/* Nibbles on top */}
        <div className="mb-4">
          <a href="#hero" className="text-amber-50 font-semibold text-lg">
            Nibbles
          </a>
        </div>
        
        {/* Menu items below */}
        <div className="text-amber-50 flex gap-x-6 text-sm">
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar