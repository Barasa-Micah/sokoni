// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar' 
import Login from './components/Auth/Login';     
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import Livestream from './components/Livestream/Livestream';
import Chat from './components/Livestream/Chat';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="chat" element={<Chat />} />
                <Route path="/livestream" element={<Livestream />} />
            </Routes>
        </Router>
    );
}

export default App;
