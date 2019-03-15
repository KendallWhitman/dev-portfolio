import React from 'react'
import Image from '../images/profile-web.jpg'

const getYears = () => {
  const startDate = new Date(2014, 7)
  const currentDate = new Date()
  return currentDate.getFullYear() - startDate.getFullYear()
}

const Hero = ({ data }) => (
  <section className='hero'>
    <img
      src={Image}
      alt='Kendall Whitman'
      className='hero__image'
    />
    <div>
      <h1 className='hero__headline'>
        {`Hi! I'm Kendall, a Front End Developer with ${getYears()} years of experience in a wide range of disciplines.`} 
      </h1>
      <p className='hero__text'>
        <span>Currently building cool stuff at </span>
        <a href='https://www.doorsteps.com' className='link'>Doorsteps.com</a>
      </p>
    </div>
  </section>
)

export default Hero
