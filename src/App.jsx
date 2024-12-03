import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import News from './pages/News'
import Sale from './pages/Sale'
import Brands from './pages/Brands'
import SinglePage from './pages/SinglePage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>

    <Header />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sale' element={<Sale />} />
      <Route path='/news' element={<News />} />
      <Route path='/brands' element={<Brands />} />
      <Route path='/product/:id' element={<SinglePage />}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App