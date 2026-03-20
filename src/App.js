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
import SellerOrderPage from './public/SellerPage/SellerOrderPage';
import AdminsHomePage from './public/AdminPage/AdminsHomePage';
import AdminProductsPage from './public/AdminPage/AdminProductsPage';
import CustomerDatas from './public/AdminPage/CustomerDatas';
import ProtectedRoute from './ProtectedRoute';
import { useContext } from 'react';
import { DContext } from './Store/MyContext';

function App() {
  const { userDetails } = useContext(DContext)
  
  return (
    <main>
    <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path="/userHomePage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["user"]} >
            <UserHomePage />
          </ProtectedRoute>
        } />

        <Route path="/userShopPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["user"]} >
          <ShopPage />
          </ProtectedRoute>
        } />
        
        <Route path="/cartPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["user"]} >
            <CartPage />
          </ProtectedRoute>
        } />

        <Route path="/userOrderPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["user"]} >
            <UserOrderPage />
          </ProtectedRoute>}
        />

        <Route path="/productDetail/:id" element={<ProductDetailPage />} />

        <Route path="/sellerHomePage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["seller"]} >
            <SellerHomePage />
          </ProtectedRoute>
        } />
        
        <Route path="/sellerProductsPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["seller"]} >
            <ProductPage />
          </ProtectedRoute>
        } />

        <Route path="/sellerOrderPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["seller"]} >
            <SellerOrderPage />
          </ProtectedRoute>
        } />

        <Route path="/adminsHomePage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["admin"]} >
            <AdminsHomePage />
          </ProtectedRoute>
        } />

        <Route path="/adminProductsPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["admin"]} >
            <AdminProductsPage />
          </ProtectedRoute>
        } />

        <Route path="/customerDatasPage" element={
          <ProtectedRoute user={userDetails} allowedRoles={["admin"]} >
            <CustomerDatas />
          </ProtectedRoute>
        } />
      </Routes>
    </main>
  );
}

export default App;
