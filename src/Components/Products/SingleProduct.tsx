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
    <div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img className='product_image' src={product.image} /></div>
						</div>
					</div>
					<div className="details col-md-6">
						<h3 className="product-title"> {product.title}</h3>
						<div className="rating">
							<div className="stars">
              {rate&&<Rating name="read-only" value={rate} readOnly />}
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">{product.description}</p>
						<h4 className="price">current price: <span>${product.price}</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						
						<div className="action">
            <button className='btn add_to_cart' onClick={()=>{ 
        dispatch(addToCart(product))
        setopen(true)
        }}>Add to Cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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