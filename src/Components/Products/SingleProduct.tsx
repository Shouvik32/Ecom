import {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Product,fetchSingleProduct} from './Products.slice';
import { AppDispatch } from '../../store/store';
import { addToCart } from '../Cart/cart.slice';
import { Alert, Rating, Snackbar } from '@mui/material';

const SingleProduct = () => {
   const {id}=useParams();
   const [open,setopen]=useState<boolean>(false)
   const [rate,setrate]=useState<number>(0) 
   const dispatch=useDispatch<AppDispatch>()
  
    let product:any=useSelector((state:any)=>state.ProductsSlice)
    const [products,setproducts]=useState<Product>()
    useEffect(()=>{
      id && dispatch(fetchSingleProduct(id))
    },[])
    useEffect(()=>{
       setproducts(product)
       //console.log(product.rating.rate);
        product&& product?.rating&&product.rating?.rate &&setrate(product.rating.rate)
     },[product,product.rating])
  return (
    <>
    <img src={product.image} style={{height:'50px',width:'50px'}} alt="product image"/>
    {product.title}
     {product.description}
     {product.price}
{rate&&<Rating name="read-only" value={rate} readOnly />}
     <button onClick={()=>{ 
        dispatch(addToCart(product))
        setopen(true)
    }}>Add to Cart</button>
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
</>
  )
}
export default SingleProduct;