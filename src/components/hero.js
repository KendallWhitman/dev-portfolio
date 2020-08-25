import React from 'react'
import siteData from '../data/site-data'
import heroData from '../data/hero-data'
import Image from '../images/profile.jpg'

const Hero = () => (
  <section className='hero'>
    <img src={Image} alt={siteData.title} className='hero__image' />
    <div>
      <h1 className='hero__headline'>{heroData.title}</h1>
      <p className='hero__text'>{heroData.message}</p>
    </div>
  </section>
)

export default Hero
