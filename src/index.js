import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Providers from './Providers';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter><Providers > <App /></Providers></BrowserRouter>




);



