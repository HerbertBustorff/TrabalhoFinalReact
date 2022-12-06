import React from "react";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Register from "./pages/Register";
import '../src/styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar/>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
