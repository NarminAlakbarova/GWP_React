import React from 'react'

const Card = ({item}) => {
  return (
    <div className='card'>
      <h3>{item.name}</h3>
      <h4>{item.email}</h4>
    </div>
  )
}

export default Card
