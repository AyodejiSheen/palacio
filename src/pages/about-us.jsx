import HeroSection from '@/components/HeroSection'
import React from 'react'

import slide1 from '../../assets/bg1.jpg'
import slide2 from '../../assets/bg2.jpg'

const AboutUs = () => {
    return (
        <>

            <HeroSection slide1={slide1} slide2={slide2} headerText={"About Us"} />

            <section className='section-pad container mx-auto'>
                <h1 className='headerText'>About Us</h1>
                <p className='subText'>
                    We are registered scenting company in Lagos Nigeria, we are internationally trained specialists in Ambient scenting. We create bespoke scenting solutions for your business. We provide Luxury Ambient scenting for Hotels, Cruise ships, Wedding halls, Lounges, Event Centers, Concert stages, Aircrafts, Homes and Exhibition centers. Unpleasant odors can negatively affect the customer experience, therefore Implementing a scenting program will help communicate your brands luxury message to your customers.
                </p>

                <p className='subText'>
                    For many years, our company has worked tirelessly to provide a core competency in providing long lasting scenting method and fragrance diffusive method which eliminates bad odors and offensive smells in businesses and events. Our in-house Nose employ the most traditional formulas utilizing advanced modern means to develop an incomparable creativity in our fragrances. Our scent experts are always available to work with you and help select a scent that complements your brand image, and also becomes a part of your brand identity. We also offer Traditional Bukhoor and Dukhoon luxury scenting. Our fragrances are world class standard, its premium, unadultered and we comply 100% to IFRA regulations.  We have more than 50,000 variety of premium niche fragrances which our clients can choose fragrances from. Our fragrances are Allergy free.
                </p>
            </section>

        </>
    )
}

export default AboutUs