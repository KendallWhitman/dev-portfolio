import React from 'react'
import siteData from '../data/site-data'
import Image from '../images/profile-web.jpg'

const Hero = () => (
  <section className='hero'>
    <img src={Image} alt={siteData.title} className='hero__image' />
    <div>
      <h1 className='hero__headline'>{siteData.description}</h1>
      <p className='hero__text'>
        <span>Currently building cool stuff at </span>
        <a href='https://www.doorsteps.com' className='link'>Doorsteps.com</a>
      </p>
    </div>
  </section>
)

export default Hero
