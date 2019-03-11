import React from 'react'

import HTML from '../images/html5.svg'
import CSS from '../images/css3.svg'
import SASS from '../images/sass.svg'
import JavaScript from '../images/javascript.svg'
import Node from '../images/node.svg'
import ReactJS from '../images/js-react.svg'
import Redux from '../images/redux.svg'
import Webpack from '../images/webpack.svg'
import Shell from '../images/shell.svg'
import Gatsby from '../images/gatsby.svg'
import Postgresql from '../images/postgresql.svg'
import Apache from '../images/apache.svg'
import WordPress from '../images/wordpress.svg'
import PHP from '../images/php.svg'
import Photoshop from '../images/adobephotoshop.svg'
import Lightroom from '../images/adobelightroom.svg'
import Illustrator from '../images/adobeillustrator.svg'
import Premiere from '../images/adobepremiere.svg'

const skillList = [
  {
    icon: HTML,
    name: `HTML`,
  },
  {
    icon: CSS,
    name: `CSS`,
  },
  {
    icon: SASS,
    name: `SASS`,
  },
  {
    icon: JavaScript,
    name: `JavaScript`,
  },
  {
    icon: Node,
    name: `NodeJS`,
  },
  {
    icon: ReactJS,
    name: `ReactJS`,
  },
  {
    icon: Redux,
    name: `Redux`,
  },
  {
    icon: Webpack,
    name: `Webpack`,
  },
  {
    icon: JavaScript,
    name: `Express`,
  },
  {
    icon: JavaScript,
    name: `NextJS`,
  },
  {
    icon: Gatsby,
    name: `GatsbyJS`,
  },
  {
    icon: Apache,
    name: `Apache`,
  },
  {
    icon: PHP,
    name: `PHP`,
  },
  {
    icon: WordPress,
    name: `WordPress`,
  },
  {
    icon: Postgresql,
    name: `PostgreSQL`,
  },
  {
    icon: Shell,
    name: `Bash Scripting`,
  },
  {
    icon: Photoshop,
    name: `Photoshop`,
  },
  {
    icon: Lightroom,
    name: `Lightroom`,
  },
  {
    icon: Illustrator,
    name: `Illustrator`,
  },
  {
    icon: Premiere,
    name: `Premiere`,
  },
]

const Skills = () => (
  <section className='section section--grid'>
    <h2 className='section__title'>My Skill Set (so far)</h2>
    {skillList.map(skill => (
      <div className='section__wrapper'>
        <skill.icon className='section__icon' />
        <p className='section__text'>{skill.name}</p>
      </div>
    ))}
  </section>
)

export default Skills
