import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import siteData from '../data/site-data'
import heroData from '../data/hero-data'

import Header from './header'
import Footer from './footer'
import '../styles/styles.scss'

class Layout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menuActive: false,
    }

    this._toggleMenu = this._toggleMenu.bind(this)
  }

  _toggleMenu () {
    this.setState({ menuActive: !this.state.menuActive }, () => {
      this.state.menuActive
        ? document.body.classList.add('fixed')
        : document.body.classList.remove('fixed')
    })
  }

  render () {
    const { children } = this.props
    const { menuActive } = this.state
    const { title, subtitle } = siteData
    const { message } = heroData

    return (
      <>
        <Helmet>
          <title>{title} | {subtitle}</title>
          <meta name='description' content={message} />
        </Helmet>
        <Header
          title={title}
          subtitle={subtitle}
          toggleMenu={this._toggleMenu}
          menuActive={menuActive}
        />
        <main
          className={`main ${menuActive ? 'main--faded' : ''}`}
          onClick={menuActive ? this._toggleMenu : undefined}
        >
          {children}
        </main>
        <Footer />
      </>
    )
  }

}

export default Layout
