import React from 'react'

const Hero = () => (
  <section className='hero'>
    <img
      src='https://www.kendallwhitman.com/static/profile.d4e9d47d.jpg'
      alt='Kendall Whitman'
      className='hero__image'
    />
    <div>
      <h1 className='hero__headline'>
        Hi! I'm Kendall, a Front End Developer with 5 years of experience in a
        wide range of disciplines.
      </h1>
      <p className='hero__text'>
        <span>Currently building cool stuff at </span>
        <a href='https://www.doorsteps.com' className='hero__link'>Doorsteps.com</a>
      </p>
    </div>
  </section>
)

export default Hero
