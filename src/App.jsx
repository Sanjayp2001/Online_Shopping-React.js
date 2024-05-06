import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
// import Shop from './Components/Shop'
// import LoginSignUp from './Components/LoginSignUp'
// import ShoppingCart from './Components/ShoppingCart'
import Hero from './Components/Hero'
import Popular from './Components/Popular'
import Offers from './Components/Offers'
import NewCollections from './Components/NewCollections'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'
import Kids from './Components/Kids'
import ProductView from './Components/ProductView'


const App = () => {

  
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <Kids/>
        <NewsLetter/>
        <Footer/>

        
        <Routes>
          
          <Route path='/productview'  element={<ProductView/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
