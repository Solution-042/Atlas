import { Link } from 'react-router-dom';
import logo from './assets/atlas.png'
import { FaEllipsisV } from "react-icons/fa";

// const button = document.querySelector("button")
// const ham = document.querySelector("#ham")
// button.addEventListener("click",()=>{
//   ham.style.display="block"
// })
const Navbar = () => {
  return (
    <nav className='lg:px-34 px-10 pt-7 flex relative items-center justify-between'>
      <div className="uppercase lg:pl-0 pl-12 pt-1.5 text-white-400 flex-column items-center justify-center">
        <img src={logo} alt="Atlas logo" className='absolute h-28 w-28 lg:left-14 lg:top-0 top-0 left-2.5' />
        <h1 className="text-white text-2xl tracking-wider">atlas</h1>
        <h3 className="text-gray-400 text-[0.7rem] leading-2 tracking-widest">properties</h3>
      </div>
      <div className=' '>
        <ul className='hidden lg:flex items-center justify-between gap-7 text-gray-300'>
          <Link to='/' className=' hover:text-amber-500'>Home</Link>
          <li className=' hover:text-amber-500'><a href="#com">Communities</a></li>
          <Link to='/about' className=' hover:text-amber-500'>About Us</Link>
          <li className=' hover:text-amber-500'>Blog</li>
          <li className=' hover:text-amber-500'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <a href="tel:+2348136755169" className='p-1.5 px-5 bg-amber-600 inline-block text-gray-300 justify-center text-sm rounded-lg'>Contact Us</a>
        <button className="lg:hidden relative text-2xl text-gray-600">
          <FaEllipsisV className=' pt-1 pl-2' />
        </button>
        <ul id="ham" className='hidden absolute flex-col items-center justify-center gap-7 text-gray-300 bg-white'>
          <Link to='/' className=' hover:text-amber-500'>Home</Link>
          <li className=' hover:text-amber-500'>Communities</li>
          <Link to='/about' className=' hover:text-amber-500'>About Us</Link>
          <li className=' hover:text-amber-500'>Blog</li>
          <li className=' hover:text-amber-500'>Contact</li>
        </ul>
      </div>
    </nav>


  );
}

export default Navbar;