import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './public/Landing/HomePage';
import UserHomePage from "./public/UserPage/UserHomePage"
import ProductsPage from './public/UserPage/ProductsPage';

function App() {
  return (
    <main>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/userHomePage" element={<UserHomePage />} />
        <Route path ="/userProductPage" element={<ProductsPage/>} />
      </Routes>
    </main>
  );
}

export default App;
