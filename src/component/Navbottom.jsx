import { Link } from "react-router-dom"
import ia from "../image/ia.png"
import ib from "../image/ib.png"
import ic from "../image/ic.png"
import id from "../image/id.png"
import ie from "../image/ie.png"
import ig from "../image/ig.png"
import { useSelector } from "react-redux"



function Navbottom() {
 const cart = useSelector(state=>state.cart)
console.log(cart)
  return (
    <>
      <div className='Navbottom'>
        <div className='Navbottom-1'>
        <Link to={"/"}> <img src="https://static.freshtohome.com/images/logo/2021/logo-medium.png" alt="" /></Link>
          <span><input type="text" placeholder='Search from 100%vfresh products' /><i class="bi bi-search"></i></span>
        </div>
        <div className=' Navbottom-2'>
         <Link to={"/About"}><p><i class="bi bi-bag">{cart.length}</i></p></Link>
          <p><i class="bi bi-person"></i></p>
        </div>
      </div>


      <div className='Navbottom-3'>
        <h6><img src={ia} alt="" /> Fish & Seafood</h6>
        <h6><img src={ib} alt="" /> Poultry</h6>
        <h6><img src={ic} alt="" /> Mutton</h6>
        <h6><img src={id} alt="" /> Steaks & Filet</h6>
        <h6><img src={ie} alt="" /> Ready To Cook</h6>
        <h6><img src={ig} alt="" /> Vagetarian</h6>
      </div>
    </>
  )
}

export default Navbottom