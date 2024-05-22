import Nav from "./Components/Nav"
import AlbumsList from "./Components/AlbumsList"
import { Route, Routes } from "react-router-dom"
import UserAlbum from "./Components/UserAlbum"

function App() {
  

  return (
    <>
      < Nav />
      < Routes >
        < Route path="/" element={< AlbumsList />}/>
        <Route path='/album' element={< UserAlbum />}/>
      </Routes>
    </>
  )
}

export default App
