import React from 'react';
import './App.css';
import { Routes, Route,Link} from "react-router-dom" ;
import Home from "./Home";
import About from "./About";
 import Info from "./Info";
 import Books from "./Books";
 import Pages from "./Pages";

function App() {

  
  return (
    <>
    <div className='nav'>
   <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/info">Info</Link>
    <Link to="/books">Books</Link>
    <Link to="/pages">Pages</Link>

</div>
    <div className='app_body'>
       
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/info" element={<Info/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/pages" element={<Pages/>}/>
            </Routes>
      
   
     
    </div>
    </>
  );
}

export default App;
