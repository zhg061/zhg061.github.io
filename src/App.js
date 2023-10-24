import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Home/Home';
import Header from './Header';
import Blog from './Projects/Blog';
import Footer from './Footer';
import About from './AboutMe/About';
import { Banner } from './Home/Banner';
import { Skills } from './Skills/Skills';
import { Contact } from './Contact/Contact';
// import hashHistory from './hashHistory';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> 
      <Footer
        title="Footer"
        description="Connect With Me!"
      />
    </div>
  );
}

export default App;
