import ServiceHero from '@/components/serviceHero'
import { services } from 'assets/data'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Service = () => {

    const router = useRouter()
    const { id, service } = router.query

    useEffect(() => {
        let findId = services.find((each) => each.id = id)
        let findTitle = services.find((each) => each.title = service)

        if (!findId || !findTitle){
            router.back()
        }
    }, [])


    return (
        <>

            <ServiceHero slide1={services[id]?.image} headerText={services[id]?.title} />

            <section className='section-pad container mx-auto'>
                <h1 className='headerText'>{services[id]?.title}</h1>
                <p className='subText'>
                    {services[id]?.text}
                </p>
            </section>

        </>
    )
}

export default Service