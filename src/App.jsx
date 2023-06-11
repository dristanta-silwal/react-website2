import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'

import { Route, Routes, Navigate } from 'react-router-dom'

import "./index.css"

const App = () => {
    return (
        <>          
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/service' element={<Service />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
            <Footer />
        </>


        // <h1>Good</h1>
    )
}

export default App