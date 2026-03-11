import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './public/Landing/HomePage';
import UserHomePage from "./public/UserPage/UserHomePage"
import ShopPage from './public/UserPage/ShopPage';
import CartPage from './public/UserPage/CartPage';
import ProductDetailPage from './public/UserPage/ProductDetailPage';

function App() {
  return (
    <main>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/userHomePage" element={<UserHomePage />} />
        <Route path="/userShopPage" element={<ShopPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/productDetail/:id" element={<ProductDetailPage/>} />
      </Routes>
    </main>
  );
}

export default App;
