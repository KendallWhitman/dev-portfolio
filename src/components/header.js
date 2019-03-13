import React from 'react'
import PropTypes from 'prop-types'

import Github from '../images/github.svg'
import Gogs from '../images/git.svg'
import CodePen from '../images/codepen.svg'
import LinkedIn from '../images/linkedin.svg'
import Mastodon from '../images/mastodon.svg'
import Instagram from '../images/instagram.svg'

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
        <li className='nav__item'>
          <a href='https://github.com/KendallWhitman' title='GitHub' className='nav__link'>
            <Github className='nav__icon' />
            <span className='nav__text'>GitHub</span>
          </a>
        </li>
        <li className='nav__item'>
          <a href='https://gogs.thewhitmans.cloud/explore' title='Gogs' className='nav__link'>
            <Gogs className='nav__icon' />
            <span className='nav__text'>Gogs</span>
          </a>
        </li>
        <li className='nav__item'>
          <a href='https://codepen.io/KendallWhitman' title='CodePen' className='nav__link'>
            <CodePen className='nav__icon' />
            <span className='nav__text'>CodePen</span>
          </a>
        </li>
        <li className='nav__item'>
          <a href='https://www.linkedin.com/in/kendall-whitman-9465ba11b' title='LinkedIn' className='nav__link'>
            <LinkedIn className='nav__icon' />
            <span className='nav__text'>LinkedIn</span>
          </a>
        </li>
        <li className='nav__item'>
          <a href='https://linuxrocks.online/@AsteroidMiner' title='Mastodon' className='nav__link'>
            <Mastodon className='nav__icon' />
            <span className='nav__text'>Mastodon</span>
          </a>
        </li>
        <li className='nav__item'>
          <a href='https://www.instagram.com/kendallawhitman/' title='Instagram' className='nav__link'>
            <Instagram className='nav__icon' />
              <span className='nav__text'>Instagram</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
