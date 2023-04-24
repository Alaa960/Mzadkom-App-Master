import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home-Page/Home';
import HowToBuy from './components/HowToBuy/HowToBuy';
import Login from './components/Login/Login';
import Register from './components/SignUp-page/Register';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import ProductInfo from './components/Product-Info/ProductInfo';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/howtobuy' element={<HowToBuy />} />
        <Route path='/whoweare' element={<WhoWeAre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
