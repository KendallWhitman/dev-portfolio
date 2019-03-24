import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

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
    const title = 'Kendall Whitman'
    const subtitle = 'Front End Developer'
    const { children } = this.props
    const { menuActive } = this.state

    return (
      <>
        <Helmet>
          <title>{title} | {subtitle}</title>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Oswald:400,500,600' />
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
