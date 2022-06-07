import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './DappComponents/Login';
import Messenger from './DappComponents/Messenger.jsx';
import Documentation from './DocumentationComponents/Documentation';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path = '/docs' element={<Documentation/>} /> 
      <Route path="/Messenger/:address/:username" element={<Messenger />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
      <Route path="*" element={ <main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
    </Routes>
  </BrowserRouter>
);