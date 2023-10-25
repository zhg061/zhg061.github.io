import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Router, Route, Link } from 'react-router';
import { Routes, BrowserRouter, HashRouter, Route } from "react-router-dom";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'G-GV13P6F862'
}
TagManager.initialize(tagManagerArgs)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
