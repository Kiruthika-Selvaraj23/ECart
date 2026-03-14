import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './public/Landing/HomePage';
import UserHomePage from "./public/UserPage/UserHomePage"
import ShopPage from './public/UserPage/ShopPage';
import CartPage from './public/UserPage/CartPage';
import ProductDetailPage from './public/UserPage/ProductDetailPage';
import SellerHomePage from './public/SellerPage/SellerHomePage';
import ProductPage from './public/SellerPage/ProductPage';
import UserOrderPage from './public/UserPage/UserOrderPage';

function App() {
  return (
    <main>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/userHomePage" element={<UserHomePage />} />
        <Route path="/userShopPage" element={<ShopPage />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/productDetail/:id" element={<ProductDetailPage />} />
        <Route path="/sellerHomePage" element={<SellerHomePage />} />
        <Route path="/sellerProductsPage" element={<ProductPage />} />
        <Route path="/userOrderPage" element={<UserOrderPage/>} />
      </Routes>
    </main>
  );
}

export default App;
