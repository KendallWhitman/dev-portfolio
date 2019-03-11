import React from 'react'

import Doorsteps from '../images/doorsteps.svg'
import Airplane from '../images/airplane.svg'
import Alkami from '../images/alkami.svg'
import DoctorLogic from '../images/doctorlogic.svg'

const portfolioList = [
  {
    icon: Doorsteps,
    name: `Doorsteps (2017 to Present)`,
    description: `
      At Doorsteps, I work on a small, cross functional team with four other
      developers. We use ReactJS, NextJS, Redux, SCSS, and other technologies
      to build out our front end with mostly NodeJS (We've still got a lone
      Ruby on Rails server) on the backend. While being a cross functional team
      means I touch all parts of the application, my strengths tend to lie in
      the front end, writing JavaScript and SCSS components.
    `,
    links: [
      {
        name: 'Doorsteps.com',
        link: 'https://www.doorsteps.com'
      }
    ],
  },
  {
    icon: Airplane,
    name: `Freelance (March 2017 to July 2017)`,
    description: `
      Shortly after moving to New York, I picked up a number of different
      projects, from single page portfolio sites, to larger e-commerce sites.
      The tools for these depended on the project, but I would tend to lean
      towards WordPress or GatsbyJS. All the while using SASS or regular CSS
      for styling.
    `,
    links: [
      {
        name: 'EmilyRahm.com',
        link: 'https://www.emilyrahm.com'
      },
      {
        name: 'JenniferEckhart.com',
        link: 'https://www.jennifereckhart.com'
      },
      {
        name: 'SarahTeed.com',
        link: 'https://www.sarahteed.com'
      },
    ],
  },
  {
    icon: Alkami,
    name: `Alkami (March 2016 to January 2017)`,
    description: `Lorem Ipsum`,
    links: [
      {
        name: 'Alkami.com',
        link: 'https://www.alkami.com'
      }
    ],
  },
  {
    icon: DoctorLogic,
    name: `DoctorLogic (July 2014 to March 2016)`,
    description: ``,
    links: [
      {
        name: 'DoctorLogic.com',
        link: 'https://www.doctorlogic.com'
      }
    ],
  },
]

const Portfolio = () => (
  <section className='section'>
    <h2 className='section__title'>What I've Been Doing</h2>
    {portfolioList.map((item, i) => {
      return (
        <div key={i} className='section__wrapper'>
          {item.icon &&
            <item.icon className='section__icon section__icon--large' />
          }
          <div>
            <h3 className='section__subtitle'>{ item.name }</h3>
            <p className='section__text section__text--spaced'>{ item.description }</p>
            {item.links && item.links.map((link, i) => (
              <a key={i} href={link.link} className='section__link'>{link.name}</a>
            ))}
          </div>
        </div>
      )
    })}
  </section>
)

export default Portfolio
