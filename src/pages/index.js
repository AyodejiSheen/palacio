import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Link from 'next/link'

import slide1 from '../../assets/bg1.jpg'
import slide2 from '../../assets/bg2.jpg'
import slide3 from '../../assets/bg3.jpg'
import slide4 from '../../assets/bg4.jpg'
import slide5 from '../../assets/bg5.jpg'


import card1 from '../../assets/bg6.jpg'
import card2 from '../../assets/bg7.jpg'
import card3 from '../../assets/bg8.jpg'

import { BsArrowRight } from 'react-icons/bs'
import { services } from 'assets/data'
import { useRouter } from 'next/router'




export default function Home() {

  const router = useRouter()


  const handleClick = (value) => {
      router.push(`${value.index}/${value.title}`)
  }


  return (
    <>
      <HeroSection slide1={slide1} slide2={slide2} slide3={slide3} slide4={slide4} slide5={slide5} headerText={"Fragrance Palacio"} headerSubText={"Think luxury scenting, remember Fragrance Palacio."} arr={true} />

      <section className='section-pad container mx-auto'>
        <h1 className='headerText pb-4'>Key Services</h1>

        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8'>
          {
            services?.slice(0, 3).map((each, i) => {
              return (
                <div onClick={() => handleClick({ index: i, title: each.title })}  key={i} className='card-wrapper cursor-pointer' >
                  <img src={each.image} alt="image card 1" className='card-image ' />
                  <div className='space-y-3 card-text-area'>
                    <h2 className='mini-head text-center'>{each.title}</h2>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <Link href="services">
            <button className='hero-btn btn-shadow'>VIEW ALL <BsArrowRight /> </button>
          </Link>
        </div>

      </section>











    </>
  )
}
