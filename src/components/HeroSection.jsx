
import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'




const HeroSection = (props) => {

    let { headerText, headerSubText, slide1, slide2, arr, slide3, slide4, slide5 } = props

    let images = [slide1, slide2, slide3, slide4, slide5]

    return (
        <>
            <div className="relative min-h-screen">
                <div className='flex h-screen w-full absolute  items-center '>
                    <div  className='bg-opacity-60 h-screen w-full bg-theme p-10 md:p-20 space-y-6 md:space-y-8 flex flex-col justify-center items-center md:items-start' style={{ zIndex: 1000 }}>
                        <div className='text-center mx-auto space-y-6'>
                            <div data-aos="fade-left">
                                <h1 className='hero-header'>{headerText}</h1>
                                <h1 className='hero-subText'>{headerSubText}</h1>
                            </div>

                            <div className='mx-auto' data-aos="fade-up">
                                <Link href="/contact-us">
                                    <button className='hero-btn'>CONTACT US <BsArrowRight /> </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    arr ? (
                        <Carousel className="relative h-screen overflow-hidden">
                            {
                                images.map((each, i) => {
                                    return (
                                        <Image src={each} key={i} alt="slide1" className='object-cover w-full h-screen' />
                                    )
                                })
                            }
                        </Carousel>
                    ) : (
                        <Carousel className="relative h-screen overflow-hidden">
                            <Image src={slide1} alt="slide1" className='object-cover w-full h-screen' />
                            <Image src={slide2} alt="slide2" className='object-cover w-full h-screen' />
                        </Carousel>
                    )
                }
            </div>
        </>
    )
}


export default HeroSection;