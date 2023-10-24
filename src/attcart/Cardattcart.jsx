import React from 'react'

function Cardattcart() {
  return (
    <div className="cardmane h-auto border m-2" style={{'width' : '18rem'}}> 
    <img src="" className="card-img-top "  alt="..." height={'250px'} width={'180px'}/>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">name</h5>
      <p className="card-text">description</p>
      <h3>299</h3>
      <a href="#" className="btn  ms-5" onClick={()=>handleAdd(item)}>Add to Cart</a>
    </div>
  </div>
  )
}

export default Cardattcart