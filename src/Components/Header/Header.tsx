
import { Link, useNavigate } from 'react-router-dom';
import { headerStyles } from './HeaderStyles';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { getTotalAmount } from '../../Redux/Slice/cart.slice';
import logo from "../../images/icon-9.png";
import Logout from '../Auth/Logout';

const Header = () => {
    const navigate=useNavigate()
    const totalAmount=useSelector(getTotalAmount)
    const token=localStorage.getItem("token")
    const goToCart=()=>{
      console.log("clicked");
      
      // if(token){
      //    navigate("/cart")
      // }
      // else{ e44e
      //    navigate("/login")
      // }
    
   navigate("/cart")
    
   
    }
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
         <div className="container-fluid">
            <nav className="navbar navbar-dark bg-dark d-flex">
               
               <img src={logo} alt=""/>
              
               <div className="collapse navbar-collapse" id="navbarsExample01">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <Link to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                     <Link to="/categories">Categories</Link>
                     </li>
                     <li><div className='cart' onClick={goToCart}>
                    <Badge badgeContent={totalAmount>0?totalAmount:'0'} sx={{color:"black"}}>
                    <ShoppingCartIcon/>
                     </Badge>
                     </div>
                     </li>
                  </ul>
               </div>
              {localStorage?.token&&<button className="auth" onClick={()=>navigate("/login")}>Login</button>} 
               {localStorage?.token&&<Logout/>}
            </nav>
         </div>
         </div>
     
      
    </>
  )
}

export default Header