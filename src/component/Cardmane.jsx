import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/slice/cartSlice'
import { useNavigate } from 'react-router-dom'
function Cardmane({dat}) {
  const {name , description , price , image} =dat
   const dispatch = useDispatch()
   const navigate = useNavigate()
  const handleAdd = (dat)=>{
   dispatch(add(dat))
   navigate('/About')
  }
  return ( 
    <>
 <div className="cardmane "onClick={()=>handleAdd(dat)}> 
  <img src={image} className="card-img-top "  alt="..." />
  <div className="card-body  d-flex flex-column">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <h3>{price}</h3>
   <div className='btn-1 d-flex justify-content-center '>
     <a href="#" className="btn  ms-auto ms-5" onClick={()=>handleAdd(dat)}>Add to Cart</a>
     </div>
  </div>
</div>
    </>
  )
}

export default Cardmane