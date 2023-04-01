import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import About from './About'
import Gallery from './Gallery'
import Home from './Home'

import "./content.css"

function Content() {
  return (
    <div className='content'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        
    </div>
  )
}

export default Content