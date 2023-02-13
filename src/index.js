import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// creating a root element - root element is where everything in our app is going to exist...gets the document by its id 'root'
// 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

