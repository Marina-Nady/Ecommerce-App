import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import ProductDetails from './components/ProductDetails';


function AppRouter() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/products/:id" element={<ProductDetails/>}/>


            </Routes>
        </Router>

    );
  }
  
  export default AppRouter;