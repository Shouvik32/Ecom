import {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Product,fetchSingleProduct} from '../../Redux/Slice/Products.slice';
import { AppDispatch } from '../../Redux/store/store';
import { addToCart } from '../../Redux/Slice/cart.slice';
import { Alert, Rating, Snackbar } from '@mui/material';

const SingleProduct:React.FC = () => {
   const {id}=useParams();
   const [open,setopen]=useState<boolean>(false)
   const [rate,setrate]=useState<number>(0)
   const [load,setload] =useState<boolean>(false)
   const dispatch=useDispatch<AppDispatch>()
   const [products,setproducts]=useState<Product>()
    let product:any=useSelector((state:any)=>state.ProductsSlice)
    
    useEffect(()=>{
        setload(true)
      id && dispatch(fetchSingleProduct(id))
    },[])
    useEffect(()=>{
       setproducts(product)
       //console.log(product.rating.rate);
       products&&setload(false)
        product&& product?.rating&&product.rating?.rate &&setrate(product.rating.rate)
     },[product,product.rating])
  return (
    <>
   {!load &&<> 
   <img src={product.image} style={{height:'50px',width:'50px'}} alt="product image"/>
    {product.title}
     {product.description}
     {product.price}
{rate&&<Rating name="read-only" value={rate} readOnly />}
     <button className='btn add_to_cart' onClick={()=>{ 
        dispatch(addToCart(product))
        setopen(true)
    }}>Add to Cart</button>
    </>}
     <Snackbar
  open={open}
  onClose={()=>setopen(false)}
  autoHideDuration={2000}
  message="1 Item added to Cart"
>
 <Alert onClose={()=>setopen(false)}  severity="success" sx={{ width: '100%' }}>
    Item Has Been added to cart
  </Alert>
 </Snackbar>
 {load && <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
</div> }
</>
  )
}
export default SingleProduct;