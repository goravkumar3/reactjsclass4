import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home ,About,Signup} from '../../pages';
function Navigate() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
  )
}

export default Navigate;