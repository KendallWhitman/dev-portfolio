import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Section from '../components/section'

import PortfolioData from '../data/portfolio-data'
import ProjectData from '../data/project-data'
import SkillData from '../data/skill-data'
import InterestData from '../data/interest-data'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section data={PortfolioData} title={`What I've Been Doing`} />
    <Section data={ProjectData} title={`Personal Projects`} />
    <Section data={SkillData} title={`My Skill Set`} grid={true} />
    <Section data={InterestData} title={`My Other Interests`} grid={true} />
  </Layout>
)

export default IndexPage
