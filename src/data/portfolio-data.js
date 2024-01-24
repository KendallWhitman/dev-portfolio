import Doorsteps from '../images/doorsteps.svg'
import Alkami from '../images/alkami.svg'
import DoctorLogic from '../images/doctorlogic.svg'
import Realtor from '../images/realtor.svg'
import Complyify from '../images/complyify.svg'
import NBC from '../images/nbc.svg'

const PortfolioData = [
  {
    icon: NBC,
    name: `NBC News`,
    duration: `2021 - Present`,
    description: `I'm currently apart of the Articles & Video team creating
    features within articles and maintaining a consistent experience with our
    VOD and live content. We successfully launched CNBC's Investing Club
    subscription and hosted the Berkshire Hathaway spring event.`,
    links: [
      {
        name: 'NBCNews.com',
        link: 'https://nbcnews.com'
      }
    ],
  },
  {
    icon: NBC,
    name: `CNBC`,
    duration: `2020 - 2021`,
    description: `At CNBC, I worked on the Engagement team, building
    out new core functionality. This included new features and bugfixes in a
    scrum environment. The languages used here are React with SCSS, some
    GraphQL, and Jest/Enzyme for lots of testing.`,
    links: [
      {
        name: 'CNBC.com',
        link: 'https://cnbc.com'
      }
    ],
  },
  {
    icon: Complyify,
    name: `Complyify`,
    duration: `2020 - 2020`,
    description: `With Complyify I worked on creating and managing the frontend
    application for reviewing forgiveness loan requests regarding the Paycheck
    Protection Program. Most of my time was spent designing and building React
    components with minimal guidance, and writing unit tests in Jest to
    increase code coverage.`,
    links: [
      {
        name: 'Complyify.com',
        link: 'https://complyify.com'
      }
    ],
  },
  {
    icon: Realtor,
    name: `Realtor.com (Move Inc.)`,
    duration: `2017 to 2020`,
    description: `Working remotely from Dallas, I worked on a small team of
    designers and developers creating and managing the Sell and MyHome pages of
    realtor.com. Most of my day is spent working with React, implementing API
    endpoints via Express and GraphQL, and building out our pages with Styled
    Components. More recently I've begun working with our mobile team, building
    out widgets with Dart and Flutter for our native apps.`,
    links: [
      {
        name: 'Realtor.com',
        link: 'https://www.realtor.com'
      }
    ],
  },
  {
    icon: Alkami,
    name: `Alkami`,
    duration: `2016 to 2017`,
    description: `Most of my responsibilities at Alkami were building out the
    front end for our banking clients. After working with the design team, I
    would take the finished design and build out the layouts needed. I would
    also build out new features introduced by our project manager. We used an
    ASP.NET framework, with SASS CSS, and KnockoutJS as our front end
    framework.`,
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
    duration: `2014 to 2016`,
    description: `DoctorLogic was where I first started my web development
    career after my four year stint in IT support. I worked closely with the
    lead designer and would build out front page designs from Photoshop
    mockups. We used an ASP.NET framework, LESS CSS, and vanilla JavaScript.
    After becoming the sole front end developer, I learned more than I expected
    to, and am still using that knowledge in my career today.`,
    links: [
      {
        name: 'DoctorLogic.com',
        link: 'https://www.doctorlogic.com'
      },
    ],
  },
]

export default PortfolioData
