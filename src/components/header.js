import React from 'react'
import SocialData from '../data/social-data'

const Header = ({ title, subtitle, toggleMenu, menuActive }) => (
  <header className='header'>
    <a href='/' className='logo'>
      <span className='logo__title'>{title}</span>
      <span className='logo__subtitle'>{subtitle}</span>
    </a>

    <span
      onClick={() => { toggleMenu() }}
      className={`mobile-menu ${menuActive ? 'mobile-menu--active' : ''}`}
    />

    <nav className={`nav ${menuActive ? 'nav--active' : ''}`}>
      <ul className='nav__list'>
        {SocialData.map((item, i) => (
          <li key={i} className='nav__item'>
            <a href={item.link} title='GitHub' className='nav__link'>
              <item.icon className='nav__icon' />
              <span className='nav__text'>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
