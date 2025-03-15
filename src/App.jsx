import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Achievement from './components/achievement';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <BrowserRouter>
         <NavBar />
         <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/project' element={<Project/>}></Route>
         <Route path='/achievement' element={<Achievement/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         </Routes>
         </BrowserRouter>
       
      </div>
     
    </>
  )
}

export default App
