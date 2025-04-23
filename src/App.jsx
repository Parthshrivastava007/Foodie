import React, { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PalceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LogInPopUp from './components/LogInPopUp/LogInPopUp'

const App = () => {
  
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LogInPopUp setShowLogin = {setShowLogin}/>:<></>}
     <div className='app'>
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/cart' element = {<Cart/>} />
          <Route path = '/order' element = {<PlaceOrder/>} />
        </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App