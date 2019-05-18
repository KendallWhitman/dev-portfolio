import React from 'react'
import siteData from '../data/site-data'

const { email, pgpKey, pgpFingerprint, resumes } = siteData
const Footer = () => (
  <footer className='footer'>
    <div className='footer__wrapper'>
      <div className='footer__section'>
        <h2 className='footer__title'>Want to get in touch?</h2>
        <a href={`mailto:${email}`} className='link'>{email}</a>
        <a href={pgpKey} className='link link--newline'>PGP Public Key</a>
        <p className='footer__text'>PGP Fingerprint: {pgpFingerprint}</p>
      </div>
      <div className='footer__section'>
        <h2 className='footer__title'>Download My Resume</h2>
        {resumes.map((resume, i) => (
          <a key={i} href={resume.link} className='link link--spaced'>{resume.name}</a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
