import HeroSection from '@/components/HeroSection'
import { services } from 'assets/data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import slide1 from '../../assets/bg1.jpg'
import slide2 from '../../assets/bg2.jpg'



const Services = () => {


    const router = useRouter()


    const handleClick = (value) => {
        router.push(`${value.index}/${value.title}`)
    }



    return (
        <>

            <HeroSection slide1={slide1} slide2={slide2} headerText={"Services"} />

            <section className='section-pad container mx-auto'>
                <h1 className='headerText pb-4'>Key Services</h1>

                <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8'>
                    {
                        services.map((each, i) => {
                            return (
                                <div onClick={() => handleClick({ index: i, title: each.title })} key={i} className='card-wrapper cursor-pointer' data-aos="fade-down">
                                    <img src={each.image} alt={each.title} className='card-image' />
                                    <div className='space-y-3 card-text-area'>
                                        <h2 className='mini-head text-center'>{each.title}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>

        </>
    )
}

export default Services