import React from 'react'
import ih from "../image/ih.png"
import ii from "../image/ii.png"
import ij from "../image/ij.png"
function Item() {
  return (
    <div className='item'>
        <div className='item-1'>
            <img src={ih} alt="" />
            <h6>Become a VIP Membar and ENJOY UNLMITED FREE HOME <br/> DELIVERY,exclusive deals more! JOIN NOW</h6>
        </div><h5>|</h5>
          <div className='item-2'>
            <img src={ii} alt="" />
            <h6>Earliest vailable delivery slot in most is Tuesday, <br/> 16th May.<br/>Most areas have exprss delivery.</h6>
        </div><h5>|</h5>
        <div className='item-3'>
            <img src={ij} alt="" />
            <h6>Express Delicrey is available on our Mobile App.<br/>Download now for <br/> iOS or ANDROID</h6>
        </div>
    </div>
  )
}

export default Item