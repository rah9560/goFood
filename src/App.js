import React from 'react'
import Home from "./screens/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path="/createuser" element= {<Signup/>}/>
    </Routes>
    </BrowserRouter>

  )
}
export default App