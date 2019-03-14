import React from 'react'

const SectionItem = props => {
  const { grid, i, item } = props

  if (!grid) {
    return (
      <div key={i} className='section-item'>
        <item.icon className='section-item__icon section-item__icon--large' />
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
      </div>
    )
  } else {
    return (
      <div key={i} className='section-item'>
        {item.icon &&
          <item.icon className='section-item__icon' />
        }
        <p className='section-item__text section-item__text--centered'>
          {item.name}
        </p>
      </div>
    )
  }
}

export default SectionItem
