import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './public/Landing/HomePage';
import UserHomePage from "./public/UserPage/UserHomePage"
import ShopPage from './public/UserPage/ShopPage';

function App() {
  return (
    <main>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/userHomePage" element={<UserHomePage />} />
        <Route path ="/userShopPage" element={<ShopPage/>} />
      </Routes>
    </main>
  );
}

export default App;
