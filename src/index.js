import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
      <App />
  
</BrowserRouter> 
<ToastContainer></ToastContainer>
 </React.StrictMode>

);

