import Image from 'next/image';
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2"
import Link from 'next/link';



function NavLayout() {


    const [open, setOpen] = useState(false)

    const handleBar = () => {
        setOpen(!open)
    }


    return (
        <>

            <nav className="w-full mx-auto px-4 backdrop-blur-2xl  py-4 fixed bg-theme bg-opacity-70" style={{ zIndex: 100000 }}>
                <div className="container flex flex-wrap items-center justify-between mx-auto">

                    <Link href="/" className="flex items-center ">
                        <Image src={logo} className="w-16 md:w-20" alt="Fragrance Palacio" />
                    </Link>

                    <button onClick={handleBar} type="button" className="inline-flex items-center p-1 ml-3 text-sm rounded-lg lg:hidden hover:bg-gray-100 border border-white text-white focus:bg-slate-900 focus:bg-opacity-20" aria-controls="navbar-dropdown" aria-expanded="false">
                        {
                            open ? <HiOutlineXMark className='text-2xl font-semibold' /> : <HiOutlineBars3 className='text-2xl font-semibold' />
                        }
                    </button>

                    <div className={`w-full lg:block md:w-auto ${open ? "block" : "hidden"}`}>
                        <ul className="flex flex-col py-4 px-10 md:px-14 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 lg:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:text-base">
                            <li>
                                <Link href="/" onClick={handleBar} className="block py-2 pl-3 pr-4 md:bg-transparent lg:text-base md:p-0 md:dark:bg-transparent font-bold hover:text-theme nav-link" aria-current="page">Home</Link>
                            </li>


                            <li>
                                <Link href="/services" onClick={handleBar} className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-gray-700 hover:text-theme md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:text-base nav-link">Services</Link>
                            </li>


                            <li>
                                <Link href="/about-us"  onClick={handleBar} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-gray-700 hover:text-theme md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:text-base nav-link">About Us </Link>
                            </li>


                            <li>
                                <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-gray-700 rounded hover:text-theme md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:text-base nav-link">Careers</button>
                            </li>


                            <li>
                                <Link href="/contact-us" onClick={handleBar} className="block font-bold py-2 pl-3 pr-4 text-gray-700 hover:bg-text-theme md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent lg:text-base nav-link">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavLayout;