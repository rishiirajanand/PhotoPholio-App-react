import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'

function Routing() {
  return (
    
    < Routes >
        <Route path='/' element={< App />}/>
    </Routes>
  )
}

export default Routing
