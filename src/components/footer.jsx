import { services } from 'assets/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {

    const router = useRouter()


    const handleClick = (value) => {
        router.push(`/${value.index}/${value.title}`)
    }


    return (
        <>
            <section className='bg-black section-pad'>
                <div className='mx-auto container grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <Image src={logo} alt="fragrance palacio" className='w-28' />
                    </div>

                    <div className=''>
                        <h1 className='mini-head text-white'>KEY SERVICES</h1>

                        {
                            services.map((each, i) => {
                                return (
                                    <div onClick={() => handleClick({ index: i, title: each.title })} key={i} className='nav-link'>
                                       <button className="footer-link">{each.title}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className=' mini-head text-white'>CONTACT</h1>
                        <p className='footer-link'>
                            115 Office Court Building, Oud Metha P.O.Box 23240 Dubai, Lorem Ipsum Emirates.
                            <br></br>Office: +979 9 302 9452
                            <br></br>Fax: +973 4 399 9305
                            <br></br>Email: bookings@frangrancepalacio.com
                        </p>
                    </div>
                </div>
            </section>

            <div className='border-t py-6 bg-black border-slate-500'>
                <p className="text-center footer-link">Copyright &copy; {new Date().getFullYear()} - Fragrance Palacio All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer