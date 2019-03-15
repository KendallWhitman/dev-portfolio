import React from 'react'

const SectionItem = props => {
  const { grid, i, item } = props

  return (
    <div key={i} className='section-item'>
      {item.icon &&
        <item.icon className={`section-item__icon ${!grid ? 'section-item__icon--large': ''}`} />
      }
      {grid &&
        <p className='section-item__text section-item__text--centered'>
          {item.name}
        </p>
      }
      {!grid &&
        <>
          <h3 className='section-item__title'>{item.name}</h3>
          <div className='section-item__container'>
            <p className='section-item__text section-item__text--spaced'>
              {item.description}
            </p>
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
