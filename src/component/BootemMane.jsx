import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
Link
function BootemMane() {
  const cart = useSelector(state=>state.cart)
  return (
    <div className='bootemMane'>
        <div className='bootemMane-1'>
           <Link to={"/"}><p><i class="bi bi-house-door "><br/></i>Home</p></Link>
           <Link to={"/"}> <p><i class="bi bi-heart"><br/></i>Favorites</p></Link>
            <Link to={"/Categories"}><p><i class="bi bi-ui-checks-grid"><br/></i>Categories</p></Link>
             <Link to={"/About"}><p><i class="bi bi-bag">{cart.length}<br/></i>Cart</p></Link>
            <Link to={"/"}><p><i class="bi bi-person-circle"><br/></i>Account</p></Link>
        </div>
    </div>
  )
}

export default BootemMane