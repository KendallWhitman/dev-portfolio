import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'
import Projects from '../components/projects'
import Interests from '../components/interests'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Portfolio />
    <Projects />
    <Skills />
    <Interests />
  </Layout>
)

export default IndexPage
