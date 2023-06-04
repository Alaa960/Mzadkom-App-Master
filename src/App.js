import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home-Page/Home';
import HowToBuy from './components/HowToBuy/HowToBuy';
import Login from './components/Login/Login';
import Register from './components/SignUp-page/Register';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import ProductInfo from './components/Product-Info/ProductInfo';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import AddProduct from './components/AddProduct/AddProduct';
import UserProducts from './components/UserProducts/UserProducts';
import EditProfile from './components/EditProfile/EditProfile';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/howtobuy' element={<HowToBuy />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/product/:product_id' element={<ProductInfo />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/yourproducts' element={<UserProducts />} />
        <Route path='/editprofile' element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
