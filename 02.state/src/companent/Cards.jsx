import React from 'react'
import Card from './Card'

const Cards = ({users}) => {
    console.log(users);
  return (
    <div className='cards'>
      {
        users.map((item)=>{
          return  <Card item={item}/>
        })
      }
    </div>
   
  )
}

export default Cards
