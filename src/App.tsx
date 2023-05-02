
import './App.css';
import Products from './Components/Products/Products';
import CartList from './Components/Cart/CartList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import SingleProduct from './Components/Products/SingleProduct';
import Category from './Components/Categories/Category';
import ProductByCategory from './Components/Categories/ProductByCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<CartList/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/categories' element={<Category/>}/>
        <Route path='category/:name' element={<ProductByCategory/>}/>
        </Routes>
  </BrowserRouter>
  
  {/*<CartList/>*/}
      
    </div>
  );
}

export default App;
