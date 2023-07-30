import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Home/Home';
import Header from './Header';
import Resume from './Resume/Resume';
import Blog from './Projects/Blog';
import Footer from './Footer';
import About from './AboutMe/About';
// import hashHistory from './hashHistory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/skills' element={<Resume/>}/> */}
        <Route path='/project' element={<Blog/>}/>
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
