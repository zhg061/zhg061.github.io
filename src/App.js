import * as React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Home/Home';
import Header from './Header';
import Resume from './Resume/Resume';
import Blog from './Projects/Blog';
import Footer from './Footer';
import About from './AboutMe/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes> 
            <Route path='/' element={<Home/>} />
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/project' element={<Blog/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes> 
      </BrowserRouter> 
      <Footer
        title="Footer"
        description="Connect With Me!"
      />
    </div>
  );
}

export default App;
