// App.js
import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './layouts/theme';
import './App.css';
// import SignInSide from './pages/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './compoents/Routes';
import { BrowserRouter } from 'react-router-dom';

 
function App() {
  return (
    <BrowserRouter>
    <Routes />
     </BrowserRouter>
  );
}


export default App;
