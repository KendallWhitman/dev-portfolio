import React from 'react'
import SectionItem from './section-item'

const Section = props => {
  const { data, grid, title } = props
  return (
    <section className={`section ${grid ? 'section--grid' : ''}`}>
      <h2 className='section__title'>{title}</h2>
      {data.map((item, i) => (
        <SectionItem grid={grid} i={i} item={item} />
      ))}
    </section>
  )
}

export default Section