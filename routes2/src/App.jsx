import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Men from './pages/Men'

const App = () => {
  return (
    <div>
      <h1>this is navbar</h1>
      <Navbar/>
      <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}>
               <Route path='men' element={<Men/>}/>   //! nestd route


              </Route>
            <Route path='*' element={<NotFound/>}/>
           


         </Routes>
         <Footer/>
    </div>
  )
}

export default App