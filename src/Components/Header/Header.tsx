import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { headerStyles } from './HeaderStyles';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { getTotalAmount } from '../Cart/cart.slice';
const Header = () => {
    const navigate=useNavigate()
    const totalAmount=useSelector(getTotalAmount)
  return (
    <>
    <style>{headerStyles}</style>
    {/* { <AppBar sx={{height:"4.5em",padding:"1em"}} position="static">
     <Container sx={{padding:"20px"}} maxWidth="xl">
     <div className='navbar'>
     LOGO
     <div>
        <Link to="/" style={{textDecoration:"none",color:"white"}}>All Products</Link>
     </div>
     <div>
        <Link to="/categories" style={{textDecoration:"none",color:"white"}}>Categories</Link>
     </div>
     
     </div>
     <div className='cart' onClick={()=>navigate('/cart')}>
     <Badge badgeContent={totalAmount>0?totalAmount:'0'}>
        <ShoppingCartIcon/>
     </Badge>
     </div>
     </Container>
    
     </AppBar>} */}
     <div className="header_section">
         <div className="container">
            <nav className="navbar navbar-dark bg-dark">
               <a className="logo" href="index.html"></a>
               <div className="search_section">
                  <ul>
                     
                  
                     
                  </ul>
               </div>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarsExample01">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="category.html">Category</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="products.html">Products</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="clients.html">Client</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact Us</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         </div>
     
      
    </>
  )
}

export default Header