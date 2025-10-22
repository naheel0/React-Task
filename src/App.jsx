import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Signup from './signup';
import React from 'react';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Home/>} />
    <Route path ="/login" element={<Login />} />
    <Route path ="/signup" element={<Signup />} />
    </Routes>
</BrowserRouter> 
 )
}