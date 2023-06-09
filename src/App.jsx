import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'

import Footer from './Components/Footer'
import Content from './Components/Content'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>

    </div>
  )
}

export default App
