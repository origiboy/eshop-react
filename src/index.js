import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { StoreProvider } from './store/StoreContext';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StoreProvider>
    <div className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        </Router>
    </div>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
