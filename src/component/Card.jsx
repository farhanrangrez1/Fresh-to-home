import React from 'react'
import Cardmane from './Cardmane'
import data from "../data/Data"
function Card() {
  return (
    <>
    <div className='card-1 '>
    <h1>Flash Sale </h1>
    </div>
  <div className='card d-flex g-2 h-100'>
    {
      data.biscuits.map(dat=><Cardmane key={dat.id} dat={dat}/>)
    }
  </div>
    </>
  )
}

export default Card