import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCartProducts,removeFromCart,addToCart, getTotalPrice, getTotalAmount } from './cart.slice'

const CartList = () => {
    let navigate=useNavigate();
    const dispatch=useDispatch();
    const cartList=useSelector(getCartProducts)
    const totalPrice=useSelector(getTotalPrice).toFixed(2)
    const totalAmount=useSelector(getTotalAmount)
  return (
    <>
        {cartList.map((cart)=>(
            
            <div key={cart.id} className="product">
                 <img src={cart.image} style={{height:'50px',width:'50px'}}/>
            <h4 className="productName">{cart.title}</h4>
            <p className="productPrice">{`$${cart.price}`}</p>
            <p>{cart.amount}</p>
            <button onClick={()=>dispatch(removeFromCart(cart.id))}>-</button>
            <button onClick={()=>dispatch(addToCart(cart))}>+</button>
        </div>
        ))
        }

        <h1>Total amount of products</h1>
        <p>{totalAmount}</p>
        <h1>Total price</h1>
        <p>${totalPrice}</p>
    </>
  )
}

export default CartList