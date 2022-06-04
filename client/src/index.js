import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dapp from './DappComponents/Dapp'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Dapp" element={<Dapp />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
      <Route path="*" element={ <main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
    </Routes>
  </BrowserRouter>
);