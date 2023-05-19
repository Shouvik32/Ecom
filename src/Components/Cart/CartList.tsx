import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCartProducts,removeFromCart,addToCart, getTotalPrice, getTotalAmount } from '../../Redux/Slice/cart.slice'

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
        {cartList.length>0?cartList.map((cart)=>(
            
            <div key={cart.id} className="product">
                 <img src={cart.image} style={{height:'50px',width:'50px'}}/>
            <h4 className="productName">{cart.title}</h4>
            <p className="productPrice">{`$${cart.price}`}</p>
            <p>{cart.amount}</p>
            <button className='btn' onClick={()=>dispatch(removeFromCart(cart.id))}>-</button>
            <button className='btn' onClick={()=>dispatch(addToCart(cart))}>+</button>
          
        
        </div>
        )):
        <><span className='empty_cart'>
          <span>No Items have been added to cart</span><br/>
          <button className='btn shop' onClick={()=>navigate("/")}>Shop Now</button>
          </span>
        </>
        
        }
       {cartList.length>0&&<> 
        <h1>Total amount of products</h1><p>{totalAmount}</p>
        <h1>Total price</h1>
        <p>${totalPrice}</p>
        </>}

    </>
  )
}

export default CartList;