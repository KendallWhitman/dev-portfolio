import Doorsteps from '../images/doorsteps.svg'
import Airplane from '../images/airplane.svg'
import Alkami from '../images/alkami.svg'
import DoctorLogic from '../images/doctorlogic.svg'
import Realtor from '../images/realtor.svg'

const PortfolioData = [
  {
    icon: Realtor,
    name: `Realtor.com (Move Inc.)`,
    duration:`October 2019 to Present`,
    description: `
      Working remotely from Dallas, I work on a small team of designers and developers creating and managing the Sell and MyHome pages of realtor.com. Most of my day is spent working with React, implementing API endpoints via Express and GraphQL, and building out our pages with Styled Components. More recently I've begun working with our mobile team, building out widgets with Dart and Flutter for our native apps.
    `,
    links: [
      {
        name: 'Realtor.com',
        link: 'https://www.realtor.com'
      }
    ],
  },
  {
    icon: Doorsteps,
    name: `Doorsteps.com (Move Inc.)`,
    duration:`July 2017 to May 2019`,
    description: `
      At Doorsteps, I work on a small, cross functional team with four other developers. We use ReactJS, Redux, PostgreSQL, SCSS, and other technologies to build out our front end with mostly NodeJS (We've still got a lone Ruby on Rails server) on the backend. While being a cross functional team means I touch all parts of the application, my strengths tend to lie in the front end, writing JavaScript and SCSS components.
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
    name: `Freelance`,
    duration:`March 2017 to July 2017`,
    description: `
      Shortly after moving to New York, I picked up a number of different projects, from single page portfolio sites, to larger e-commerce sites. The tools for these depended on the project, but I would tend to lean towards WordPress or GatsbyJS, all the while using SASS or regular CSS for styling.
    `,
    links: [
      {
        name: 'EmilyRahm.com',
        link: 'https://www.emilyrahm.com'
      },
      {
        name: 'SarahTeed.com',
        link: 'http://sarahteed.com'
      },
      {
        name: 'JenniferEckhart.com',
        link: 'https://www.jennifereckhart.com'
      },
    ],
  },
  {
    icon: Alkami,
    name: `Alkami`,
    duration:`March 2016 to January 2017`,
    description: `
      Most of my responsibilities at Alkami were building out the front end for our banking clients. After working with the design team, I would take the finished design and build out the layouts needed. I would also build out new features introduced by our project manager. We used an ASP.NET framework, with SASS CSS, and KnockoutJS as our front end framework.
    `,
    links: [
      {
        name: 'Alkami.com',
        link: 'https://www.alkami.com'
      }
    ],
  },
  {
    icon: DoctorLogic,
    name: `DoctorLogic`,
    duration:`July 2014 to March 2016`,
    description: `
      DoctorLogic was where I first started my web development career after my four year stint in IT support. I worked closely with the lead designer and would build out front page designs from Photoshop mockups. We used an ASP.NET framework, LESS CSS, and vanilla JavaScript. After becoming the sole front end developer, I learned more than I expected to, and am still using that knowledge in my career today.
    `,
    links: [
      {
        name: 'DoctorLogic.com',
        link: 'https://www.doctorlogic.com'
      },
      {
        name: 'USAPlasticSurgery.com',
        link: 'https://usaplasticsurgery.com/'
      },
      {
        name: 'JansenPlasticSurgery.com',
        link: 'https://jansenplasticsurgery.com/'
      },
      {
        name: 'ClintonWebsterMD.com',
        link: 'https://clintonwebstermd.com/'
      },
    ],
  },
]

export default PortfolioData
