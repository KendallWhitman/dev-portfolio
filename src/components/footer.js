import React from 'react'
import siteData from '../data/site-data'

const { email, resumes } = siteData
const Footer = () => (
  <footer className='footer'>
    <div className='footer__wrapper'>
      <div className='footer__section'>
        <h2 className='footer__title'>Want to get in touch?</h2>
        <a href={`mailto:${email}`} className='link'>{email}</a>
      </div>
      <div className='footer__section'>
        <h2 className='footer__title'>Download My Resume</h2>
        {resumes.map(resume => (
          <a href={resume.link} className='link link--spaced'>{resume.name}</a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer