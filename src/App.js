import React, { useState } from 'react'
import Header from './Header/Header'
import Products from './Products/Products'
import './App.css'
import Category from './Category/Category'
import Footer from './About/Footer'
import Register from './Register/Register'
import Navbar from './Navbar/Navbar'

function App() {
  const [categorys, setCategorys] = useState(0)
  const [show, setShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='container'>
      <Navbar setShow={setShow} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Header />
      <Category categorys={categorys} setCategorys={setCategorys} />
      <Products categorys={categorys} searchTerm={searchTerm} />
      <Register setShow={setShow} show={show} /> 
      <Footer />
    </div>
  )
}

export default App