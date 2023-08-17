import React, { useState } from 'react';
import Button from '../button/Button';

const Nav = () => {
    let links = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Blog', link: '/' },
        { name: 'Contact Us', link: '/' },
    ];
    let [open,setOpen] = useState(false)
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[popins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'><ion-icon name="logo-ionic"></ion-icon></span>
                    Designer
                </div>
                <div onClick={()=>setOpen(!open)} className='cursor-pointer text-3xl absolute top-6 right-8 md:hidden'>
                    <ion-icon name={open ? "close":"menu"}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  bg-white ${open ? 'top-20':'top-[-490px]'}`}>
                    {
                        links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7 text-xl'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>Get Started</Button>

                </ul>
            </div>
        </div>
    );
}

export default Nav;
