import React from 'react'
import logo from '../assets/logo.png';
import Button from './Button';

const Navbar = () => {
  return (
<>
    <nav className="navbar bg-light flex justify-around py-2">
        <div className="logo ml-40">
            <img src={logo} alt="logo" />
        </div>
        <div className="list">
            <ul className='inline-flex ml-[30rem] text-purple mt-2'>
                <li className='px-3'><a className='hover:border-solid hover:border-b-2 hover:py-1' href="#">Home</a></li>
                <li className='px-3'><a className='hover:border-solid hover:border-b-2 hover:py-1' href="#">About us</a></li>
                <li className='px-3'><a className='hover:border-solid hover:border-b-2 hover:py-1' href="#">How its works</a></li>
                <li className='px-3'><a className='hover:border-solid hover:border-b-2 hover:py-1' href="#">Services</a></li>
                <li className='px-3'><a className='hover:border-solid hover:border-b-2 hover:py-1' href="#">Contact</a></li>
            </ul>
        </div>
        <div className="buttonpart text-sky">
        <Button style="border-2 border-sky py-2 px-7 rounded-[3rem] bg-tranparent hover:bg-sky hover:text-white" text={"Join now"}/>
        </div>
    </nav>
</>
    )
}

export default Navbar