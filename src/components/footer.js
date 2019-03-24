import React from 'react'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__wrapper'>
      <div className='footer__section'>
        <h2 className='footer__title'>Want to get in touch?</h2>
        <a href='mailto:kendallwhitman@gmail.com' className='link link--light'>kendallwhitman@gmail.com</a>
      </div>
      <div className='footer__section'>
        <h2 className='footer__title'>Download My Resume</h2>
        <a href='https://next.thewhitmans.cloud/index.php/s/qyARtBYmGK4srcz' className='link link--light'>PDF</a>
        <span> , </span>
        <a href='https://next.thewhitmans.cloud/index.php/s/nrDsDTBYaqEtTQD' className='link link--light'>Word</a>
        <span> , </span>
        <a href='https://next.thewhitmans.cloud/index.php/s/32PgrfkNcP8KfB8' className='link link--light'>Text</a>
      </div>
    </div>
  </footer>
)

export default Footer
