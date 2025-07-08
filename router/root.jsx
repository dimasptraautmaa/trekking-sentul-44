import axios from 'axios';
import React from 'react';
import Router from './router';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
axios.defaults.withCredentials = true;

import "@fortawesome/fontawesome-free/css/all.css";
import "./root.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Router/>
  </HelmetProvider>
)
