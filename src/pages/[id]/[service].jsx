import ServiceHero from '@/components/serviceHero'
import { services } from 'assets/data'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

const Service = () => {

    const router = useRouter()
    const { id, service } = router.query


    return (
        <>

            <ServiceHero slide1={services[id]?.image} headerText={services[id]?.title} />

            <section className='section-pad container mx-auto'>
                <h1 className='headerText'>{services[id]?.title}</h1>
                <p className='subText'>
                    {services[id]?.text}
                </p>
            </section>

            <section className='container justify-center justify-items-stretch mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 list-pad'>
                {
                    services[id]?.list.map((each, i) => {
                        return (
                                <div key={i} className='cursor-pointer  w-full list-note' data-aos="fade-down">
                                    <div>
                                        <BsCheckCircleFill className='w-5 h-5' />
                                    </div>

                                    <div className=''>
                                        <p className=''>{each}</p>
                                    </div>
                                </div>
                        )
                    })
                }
            </section>

        </>
    )
}

export default Service