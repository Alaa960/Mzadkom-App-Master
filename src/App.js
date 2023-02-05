import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home-Page/Home';
import HowToBuy from './components/HowToBuy/HowToBuy';
import Login from './components/Login/Login';
import NavBar from './components/Navbar/Navbar';
import ProductInfo from './components/Product-Info/ProductInfo';
import Register from './components/SignUp-page/Register';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/howtobuy' element={<HowToBuy />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/productInfo' element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
