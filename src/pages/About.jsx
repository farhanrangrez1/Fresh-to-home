import React from 'react'
import Footer from '../component/Footer'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/slice/cartSlice';
import { colors } from '@mui/material';
function About() {
    const dispatch=useDispatch()
    const cart = useSelector(state => state.cart)
    const { description, price, image } = cart
    const removeData=(id)=>{
     dispatch(remove(id))    
    }
    return (
        <>
            <div className='box'>
                <div >{
                    cart.map((item) =>
                        <div className="section group container mt-3 mb-3 " style={{ display: "flex" }}>
                            <div className="col span_1_of_2 px-2 rounded-4">
                                <img src={item.image} className="img-fluid" alt="" />

                            </div>
                            <div className="col span_1_of_2 px-2">
                                <div className="" style={{ width: "18rem;" }}>
                                    <div className="card-body">

                                        <h2 className='h4 mt-3'>
                                            {item.description}</h2>
                                        <h6 className
                                            ="card-title mt-3 ms-2"><del className='text-danger'>&#8377;286.00</del><span className='text-success ms-2'> ₹{item.price} /pack</span></h6>

                                        <div  style={{ display: "flex" }}>
                                            <div className='text-center mt-3'>
                                                <Button variant='outlined' onClick={() => handelDecrement(id)}>-</Button>

                                                <span className=' px-2'>1</span>
                                                <Button variant='outlined' onClick={() => handelIncrement(id)}>+</Button>
                                                <button className='btn-1'style={{ background:"#3c8031",color:"white" ,border:"none",marginLeft:"10px",borderRadius:"10px",width:"150px" }} onClick={()=>removeData(item.id)}>remove</button>
                                            </div>

                                        </div>
                                        <div style={{ lineHeight: "15px" }}>
                                            <h6 className='mt-2'></h6>
                                            <p className='mt-3' style={{ fontSize: "12px" }}>Ask any Pink perch lover and they'll tell you - the bonier, the tastier. It goes by various names though, and is a seafood lover's favourite.</p>
                                            <p><b> Marketed By:</b> </p>
                                            <p className='mt-3' style={{ fontSize: "12px" }}>Freshtohome Foods Private Limited No.201, 2nd FLOOR, Carlton Towers No.1, Old Airport Road, Kodihalli, Bangalore Urban, Karnataka - 560008</p>
                                            <img src="https://static.freshtohome.com/images/others/fssai-logo.png" alt=" " style={{ minHeight: "30px", width: "60px", }} />
                                            <h6>FSSAI Lic. No. 11221999000168</h6>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
            <Footer />



        </>
    )
}

export default About