import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Components/products/Products';
import NavBar from '../src/Components/navBar/NavBar';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import UserProfile from './Components/userProfile/UserProfile';
import { useDispatch } from 'react-redux';
import { getProfile } from './js/actions/userActions';
import { useEffect } from 'react';
import { getAllProducts } from './js/actions/productAction';
import Footer from './Components/Footer'
import Product from './Components/product/Product';
import Users from './Components/admin/Users';
import Admin from './Components/admin/Admin';




function App() {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getProfile());
  dispatch(getAllProducts());
}, [dispatch])

return (
  <div className="App">
    <div>
      <Router>
        <NavBar />
        <Route path="/" exact component={Products} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/users" exact component={Users} />
        <Route  path="/admin" exact component={Admin} />
        <Footer/>
      </Router>
      
    </div>
  </div>
);
}

export default App;
