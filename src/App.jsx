import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/wishlist' element={ <Wishlist/> } />
          <Route path='/cart' element={ <Cart/> } />
          {/* : -- this is given to show the parameter. here which is 'id'  */}
          <Route path='/view/:id' element={ <View/> } />
          {/* if user is searching other than the above given path then it will return to home  */}
          <Route path='/*' element={ <Navigate to={'/'} /> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
