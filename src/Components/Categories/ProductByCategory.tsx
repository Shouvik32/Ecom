import { Alert, Grid, Snackbar } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch } from '../../store/store'
import { addToCart } from '../Cart/cart.slice'
import { Product } from '../Products/Products.slice'
import { fetchProductsByCategory } from './Category.slice'



const ProductByCategory = () => {
    const navigate=useNavigate();
    const {name}=useParams();
    const dispatch=useDispatch<AppDispatch>()
    const [open,setopen]=useState<boolean>(false)
    let productsbyCategory:any=useSelector((state:any)=>state.ProductsSlice)
    const [product,setproduct]=useState<Product[]>([])
    useEffect(() => {
     name && dispatch(fetchProductsByCategory(name))
    }, [])
    useEffect(()=>{
        console.log(productsbyCategory);
        setproduct(productsbyCategory)
    },[productsbyCategory])
  return (
    <div>
          <Grid container spacing={3}>
        {name&&productsbyCategory&&product&&product.map((product:Product,key:number)=>
          <Grid item xs={4} key={product.id} >
             <div key={key} className="product" onClick={()=>{
                navigate(`/product/${product.id}`)}}>
            <img src={product.image} style={{height:'50px',width:'50px'}}/>
            <h4 className="productName">{product.title}</h4>
            <p className="productPrice">{`$${product.price}`}</p>
           
        </div>  
        <button onClick={()=>{
              dispatch(addToCart(product))
              }}>Add to Cart</button>
        </Grid>
        )}
        </Grid>
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
    </div>
  )
}
export default ProductByCategory;