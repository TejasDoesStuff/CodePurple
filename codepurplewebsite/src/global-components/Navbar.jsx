import Logo from "../assets/5827_logo.jpg";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState({scrollTop: 0, scrollLeft: 0})

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const scrollLeft = window.scrollX
    setScrollPosition({ scrollTop, scrollLeft })

    if (scrollTop > 500) {
      document.querySelector('.bg-codePurple').classList.remove('bg-opacity-50')
      document.querySelector('.bg-codePurple').classList.remove('hover:bg-opacity-80')

    } else {
      document.querySelector('.bg-codePurple').classList.add('bg-opacity-50')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="w-[70%] h-16 bg-codePurple fixed mt-8 bg-opacity-50 rounded-2xl flex flex-row items-center z-50 ml-[10px] hover:bg-opacity-80 transition duration-300 border-white border-4 drop-shadow-2xl">
      <img
        src={Logo}
        alt="CodePurple"
        className="absolute left-[-10px] h-24 rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => window.location.replace("/home")}
      />
      <div className="w-full flex flex-row gap-8 justify-start ml-24">
        <a href="/home" className="text-white font-kode font-extrabold text-xl relative group">
          Code Purple
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>
      <div className="w-full flex flex-row gap-8 justify-end m-8">
        <a href="/home" className="text-white font-kode relative group">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/about" className="text-white font-kode relative group">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/subteams" className="text-white font-kode relative group">
          Subteams
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/contact" className="text-white font-kode relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
