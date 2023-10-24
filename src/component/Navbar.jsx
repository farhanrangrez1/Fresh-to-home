import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='Navbar  d-flex justify-content-between'>
        <div className='Navbar-1'>
            <p><i class="bi bi-telephone-fill"></i> 744-119-9369</p>
            <p><i class="bi bi-envelope"></i> customercare@freshtohome.com</p>
        </div>
        <div className='Navbar-2'>
            <button>Certificates</button>|
            <button>Why us</button>|
            <button>Newsroom</button>|
            <button>Sell-With-Us</button>|
            <p><i class="bi bi-geo-alt-fill"></i> 4000011</p>
        </div>
      
      
       <div className='Navbar-3'>
        <div className='Navbar-4'>
        <p><i class="bi bi-geo-alt"></i>Indore / Karnataka</p>

        {/* <p><i class="bi bi-telephone-fill"></i> 744-119-9369</p> */}
        {/* <p><i class="bi bi-envelope"></i> customercare@freshtohome.com</p> */}
        <span><input type="text" placeholder='Search from 100%vfresh products' /><i class="bi bi-search"></i></span>
        </div>

        <div className='Navbar-5'>
       <Link to={"/"}> <img src="https://static.freshtohome.com/images/logo/2021/logo-medium.png" alt="" /></Link>
        </div>
       </div>
        
    </div>






    </>
  )
}

export default Navbar