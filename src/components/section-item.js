import React from 'react'

const SectionItem = props => {
  const { grid, item } = props

  return (
    <div className='section-item'>
      {item.icon &&
        <item.icon className={`section-item__icon ${grid ? 'section-item__icon--small' : ''}`} />
      }
      {grid &&
        <p className='section-item__text'>{item.name}</p>
      }
      {!grid &&
        <>
          <div>
            <h3 className='section-item__title'>{item.name}</h3>
            <p className="section-item__text">{item.duration}</p>
          </div>
          <div className='section-item__container'>
            <p className='section-item__text section-item__text--spaced'>{item.description}</p>
            <ul className="section-item__list">
              {item.links && item.links.map((link, i) => (
                <li key={i} className="section-item__item">
                  <a href={link.link} className='link'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      }
    </div>
  )
}

export default SectionItem
