import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCartProducts,removeFromCart,addToCart, getTotalPrice, getTotalAmount, deteteFromCart } from '../../Redux/Slice/cart.slice'

const CartList = () => {
    let navigate=useNavigate();
    const dispatch=useDispatch();
    const cartList=useSelector(getCartProducts)
    const totalPrice=useSelector(getTotalPrice).toFixed(2)
    const totalAmount=useSelector(getTotalAmount)
    useEffect(()=>{
      console.log(cartList);
    },[cartList])
  return (
    <>
        <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
           <div className="container-fluid h-100 py-5">
             <div className="row d-flex justify-content-center align-items-center h-100">
               <div className="col">
                 <div className="card shopping-cart" style={{borderRadius: '15px'}}>
                   <div className="card-body text-black">
                     <div className="row">
                       <div className="col-lg-6 px-5 py-4">
                        {cartList.length>0&& <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>}
                         <div className="d-flex align-items-center mb-5">
                         <div className="flex-grow-1 ms-3">
                         {cartList.length>0?cartList.map((cart)=>(
                          <>
                         <div className="container">
                          <div className="card">
                            <div className="container-fliud">
                              <div className="wrapper row">
                                <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                  <div className="tab-pane active" id="pic-1"><img style={{height:"100px",width:"90px"}} src={cart.image} /></div>
                                  </div>
                                </div>
                              <div className="details col-md-6">
                              <p className="product-title"> {cart.title}</p>
                            </div>
                           
                            <div className="cartAction"><button className='btn' onClick={()=>dispatch(removeFromCart(cart.id))}>-</button>
                            <input readOnly value={cart.amount}/>
                               <button className='btn' onClick={()=>dispatch(addToCart(cart))}>+</button></div>
                            <p style={{marginTop:"45px"}}className=" col-md-6">$ {(cart.price*cart.amount).toFixed(2)}</p>
                            <button onClick={()=>dispatch(deteteFromCart(cart.id))}><i className="fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                           
                           </div>
                          </div>
                        </div>
                      </>)):
                      <><span className='empty_cart'>
                        <span>No Items have been added to cart</span><br/>
                            <button className='btn shop' onClick={()=>navigate("/")}>Shop Now</button>
                        </span>
                      </>}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
       </div>
           </div>
         </section>
       {cartList.length>0&&<> 
        <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: '#e1f5fe'}}>
                           <h5 className="fw-bold mb-0">Total:</h5>
                           <h5 className="fw-bold mb-0">${totalPrice}</h5>
                         </div>
        {/* <h1>Total amount of products</h1><p>{totalAmount}</p>
        <h1>Total price</h1>
        <p>${totalPrice}</p> */}
        </>}
          {

cartList.length<0&&<><div className='empty_cart'>
<div>No Items have been added to cart</div><br/>
<button className='btn shop' onClick={()=>navigate("/")}>Shop Now</button>
</div>
</>
          }

        {/* <div className="col-lg-6 px-5 py-4">
                         <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                         <form className="mb-5">
                           <div className="form-outline mb-5">
                             <input type="text" id="typeText" className="form-control form-control-lg" size={17} defaultValue="1234 5678 9012 3457" minLength={19} maxLength={19} />
                             <label className="form-label" htmlFor="typeText">Card Number</label>
                           </div>
                           <div className="form-outline mb-5">
                             <input type="text" id="typeName" className="form-control form-control-lg" size={17} defaultValue="John Smith" />
                             <label className="form-label" htmlFor="typeName">Name on card</label>
                           </div>
                           <div className="row">
                             <div className="col-md-6 mb-5">
                               <div className="form-outline">
                                 <input type="text" id="typeExp" className="form-control form-control-lg" defaultValue="01/22" size={7} minLength={7} maxLength={7} />
                                 <label className="form-label" htmlFor="typeExp">Expiration</label>
                               </div>
                             </div>
                             <div className="col-md-6 mb-5">
                               <div className="form-outline">
                                 <input type="password" id="typeText" className="form-control form-control-lg" defaultValue="●●●" size={1} minLength={3} maxLength={3} />
                                 <label className="form-label" htmlFor="typeText">Cvv</label>
                               </div>
                             </div>
                           </div>
                           <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit <a href="#!">obcaecati sapiente</a>.</p>
                           <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>
                           <h5 className="fw-bold mb-5" style={{position: 'absolute', bottom: 0}}>
                             <a href="#!"><i className="fas fa-angle-left me-2" />Back to shopping</a>
                           </h5>
                         </form>
                       </div> */}
    </>
  )
}

export default CartList;

 {/* //     <div key={cart.id} className="product">
                 <img src={cart.image} style={{height:'50px',width:'50px'}}/>
            <h4 className="productName">{cart.title}</h4>
            <p className="productPrice">{`$${cart.price}`}</p>
            <p>{cart.amount}</p>
           <button className='btn' onClick={()=>dispatch(removeFromCart(cart.id))}>-</button>
            <button className='btn' onClick={()=>dispatch(addToCart(cart))}>+</button>
          
        
        // </div> */}