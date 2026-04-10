import React from 'react'
import './index.css'
import Home from './component/Home'
import Navbar from './component/navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main-div'>
        <Home />
      </div>
    </>
  )
}

export default App