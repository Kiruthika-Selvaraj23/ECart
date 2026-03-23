import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyContext from './Store/MyContext';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MyContext>
            <App />
        </MyContext>
    </BrowserRouter>
);
