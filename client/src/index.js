import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dapp from './DappComponents/Dapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './DappComponents/Login';
import Messenger from './DappComponents/Messenger.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Messenger/:address" element={<Messenger />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
      <Route path="*" element={ <main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
    </Routes>
  </BrowserRouter>
);