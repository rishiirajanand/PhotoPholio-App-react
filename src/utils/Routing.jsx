import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import UserAlbum from '../Components/UserAlbum'

function Routing() {
  return (
    
    < Routes >
        <Route path='/' element={< App />}/>
        <Route path='/album' element={< UserAlbum />}/>
    </Routes>
  )
}

export default Routing
