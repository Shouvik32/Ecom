import { Alert, Grid, Snackbar } from '@mui/material'
import {useEffect, useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch } from '../../Redux/store/store'
import { addToCart } from '../../Redux/Slice/cart.slice'
import { Product } from '../../Redux/Slice/Products.slice'
import { fetchProductsByCategory } from '../../Redux/Slice/Category.slice'
import Loader from '../Loader/Loader'



const ProductByCategory:React.FC = () => {
    const navigate=useNavigate();
    const {name}=useParams();
    const dispatch=useDispatch<AppDispatch>()
    const [open,setopen]=useState<boolean>(false)
    let productsbyCategory:any=useSelector((state:any)=>state.ProductsSlice)
    const [product,setproduct]=useState<Product[]|null>(null)
    const [load,setLoad]=useState<boolean>(false)
    useEffect(() => {
        console.log("running");
        
        setproduct(null)
        setLoad(true)
     name && dispatch(fetchProductsByCategory(name))
    }, [])
    useEffect(()=>{
        product&&setLoad(false)
        console.log(productsbyCategory);
        setproduct(productsbyCategory)
    },[productsbyCategory])
  return (
    <div>
          {!load&&<Grid container spacing={3}>
        {name&&productsbyCategory&&product&&product.map((product:Product,key:number)=>
          <Grid item xs={4} key={product.id} >
             <div key={key} className="product" onClick={()=>{
                navigate(`/product/${product.id}`)}}>
            <img src={product.image} style={{height:'50px',width:'50px'}}/>
            <h4 className="productName">{product.title}</h4>
            <p className="productPrice">{`$${product.price}`}</p>
           
        </div>  
        <button className=' btn add_to_cart' onClick={()=>{
              dispatch(addToCart(product))
              }}>Add to Cart</button>
        </Grid>
        )}
        </Grid>}
        {load &&<Loader/>}
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