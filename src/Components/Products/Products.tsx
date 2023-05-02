import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Cart/cart.slice';
import { Product,fetchProduct} from './Products.slice';
import { AppDispatch } from '../../store/store';
import { Link,useNavigate } from 'react-router-dom';
import { Alert, Grid, Snackbar } from '@mui/material';
import Banner from '../Banner/Banner';

const Products: React.FC =() =>{
    let navigate=useNavigate();
        const dispatch=useDispatch<AppDispatch>()
        const [load,setload]=useState<boolean>(false)
        const [products,setproducts]=useState<Product[]>([])
        const [open,setopen]=useState<boolean>(false)
        useEffect(()=>{
          setload(true)
            dispatch(fetchProduct())
            setTimeout(() => {
              setload(false)
            }, 2000);
        },[])
       //const[productsList,setProductList]=useState<Product[]>([])
       let productList=useSelector((state:any)=>state.ProductsSlice)
    
       useEffect(()=>{
   
       setproducts(productList)
       console.log(productList);
       
    },[productList])
  
  return (
    <>
    
   <Banner/>
   {!load&& <div className='product-list'>
    <h2  className="list">List of products</h2>
   {/* { <button onClick={()=>navigate("/cart")}>Go to cart</button>} */}
    <Grid container spacing={3} >
    
      {products?.length>0&&products.map((product:Product)=>(
          <Grid item xs={4} key={product.id} >
        <div  className="product" onClick={()=>{
            navigate(`/product/${product.id}`)
          }}>
            <img src={product.image} style={{height:'50px',width:'50px'}}/>
            <h4 className="productName">{product.title}</h4>
            <p className="productPrice">{`$${product.price}`}</p>
            
        </div>
        <button onClick={()=>{
              dispatch(addToCart(product))
             setopen(true)
              }}>Add to Cart</button>
          
        </Grid>
    ))}
      

    </Grid>
    </div>}
    {load &&<div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
</div>}
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
  );
}
export default Products;