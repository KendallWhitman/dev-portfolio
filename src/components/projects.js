import React from 'react'
import Airplane from '../images/airplane.svg'

const projectList = [
  {
    icon: Airplane,
    name: `American Sign Language API`,
    description: `
      My wife and I started learning American Sign Language in late 2018. We relied on free, online resources for learning new signs, but the interfaces were a bit dated. I thought I could pull from an open API and create a more streamlined front end for learning. Unfortunately I couldn't find any open (or closed for that matter) APIs regarding American Sign Language. So...I decided to build one. The goal is to create an application where users, much more knowledgable than I, can record themselves performing a sign and submit it to be included in the API. It's still early days, but it's definitely exciting!
    `,
    links: [
      {
        name: 'asl.thewhitmans.cloud',
        link: 'https://asl.thewhitmans.cloud'
      }
    ],
  },
]

const Projects = () => (
  <section className='section'>
    <h2 className='section__title'>Personal Projects</h2>
    {projectList.map((item, i) => {
      return (
        <div key={i} className='list-item'>
          <item.icon className='list-item__icon list-item__icon--large' />
          <h3 className='list-item__title'>{ item.name }</h3>
          <div className='list-item__container'>
            <p className='list-item__text list-item__text--spaced'>{ item.description }</p>
            <ul className="list-item__list">
              {item.links && item.links.map((link, i) => (
                <li key={i} className="list-item__item">
                  <a href={link.link} className='link'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    })}
  </section>
)

export default Projects
