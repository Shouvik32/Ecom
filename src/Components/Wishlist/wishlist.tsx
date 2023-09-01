import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { Product } from '../../Redux/Slice/Category.slice';
import { wishlistProducts,Wish,removeFromWishlist  } from '../../Redux/Slice/wishlist.slice';
import { AppDispatch, RootState } from '../../Redux/store/store';
import { useSelector } from 'react-redux';
type Props = {}

const Wishlist:React.FC = () => {
   const dispatch=useDispatch();
    const navigate=useNavigate();
    const wishlist:Wish[]=useSelector(wishlistProducts)
    //const cartList:Product[]=[];
    useEffect(() => {
       // dispatch(wishlistProducts)
      console.log(wishlist)
    
     
    }, [wishlist])
    
  return (
  
     <>
        <section className="h-100 h-custom" >
           <div className="container-fluid h-100 py-5">
             <div className="row d-flex justify-content-center align-items-center h-100">
               <div className="col">
                 <div className="card shopping-cart" style={{borderRadius: '15px'}}>
                   <div className="card-body text-black container">
                     <div className="row">
                       <div className="col-lg-6 px-5 py-4">
                        {wishlist.length>0&& <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your Wishlist products</h3>}
                         <div className="d-flex align-items-center mb-5">
                         <div className="flex-grow-1 ms-3">
                         {wishlist.length>0?wishlist.map((cart:any,key:number)=>(
                        <div key={key}>
                         <div  className="container">
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
                           
                            {/* <p style={{marginTop:"45px"}}className=" col-md-6">$ {(cart.price*cart.amount).toFixed(2)}</p> */}
                            <i onClick={()=>dispatch(removeFromWishlist(cart.id))} className="fa fa-trash"></i>
                            </div>
                           
                           </div>
                          </div>
                        </div>
                      </div>
                      )):
                      <><span className='empty_cart'>
                        <span>Wishlist has no products</span><br/>
                            <button className='btn shop' onClick={()=>navigate("/")}>Shop or add to wishlist Now</button>
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
      
          {

        wishlist.length<0&&<><div className='empty_cart'>
        <div>Wishlist is empty</div><br/>
        <button className='btn shop' onClick={()=>navigate("/")}>Shop Now</button>
        </div>
        </>
          }

        
    </>
  )
}

export default Wishlist;