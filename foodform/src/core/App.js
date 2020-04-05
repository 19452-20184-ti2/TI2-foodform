import React from 'react';
import './App.css';
//import RouterComponent from './Router';
import Navbar from '../components/navbar/Navbar.js';

function App() {
  //react only returns one element at a time(<div>,<component/>, etc...)
  return (
    <Navbar/>
  );
}

export default App;
