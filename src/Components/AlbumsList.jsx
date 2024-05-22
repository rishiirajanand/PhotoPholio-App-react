import React from 'react'
import Album from './Album'
import { useState } from 'react';
import { ToastContainer, toast , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AlbumsList() {
  const [input, setInput] = useState('');
  const [albums, setAlbums] = useState(['static album']);
  const [flag, setFlag] = useState(false);

  const handleSaveAlbum = ()=>{
    setAlbums([input, ...albums])
    toast.success(`${input} album is created`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }

  return (
    
    <>
      <div className='w-[69%] m-auto mt-10 flex flex-col items-center mb-10'>
        {
              flag ? (
                  <div className='p-8 bg-zinc-200 shadow-lg rounded-lg'>
                      <h1 className='text-3xl font-semibold mb-4'>Create an album</h1>

                      <input 
                        onChange={(e)=> setInput(e.target.value)} value={input}
                        className='w-96 px-3 py-2 rounded-full focus:ring-2 ring-blue-600 outline-none mr-4' type="text"
                        placeholder='Album Name'
                      />

                      <button onClick={ ()=> setInput('')} className='px-3 py-1 mx-2 bg-red-600 font-semibold text-white rounded-md'>
                          Clear
                      </button>

                      <button onClick={handleSaveAlbum} className='px-3 py-1 mx-2 bg-blue-600 font-semibold text-white rounded-md'>
                          Create
                      </button>
                  </div>
              ) :
              null
          }

          <div className='w-full flex justify-between mt-8'>
              <h1 className='font-bold text-2xl'>Your albums</h1>
              <button onClick={()=> setFlag(()=>!flag)} 
                  className={
                      `px-2 py-[1px] border-2 ${ !flag ? 'border-blue-600 bg-blue-100 text-blue-600' : 'border-red-600 bg-red-100 text-red-600'} rounded text-xs font-semibold`
                  }
              >
                  {flag ? 'Cancel' : 'Add album'}
              </button>
          </div>

        <div className='flex w-full flex-wrap gap-2 mt-10'>
          {
            albums.map((list, index) => < Album key={index} album = {list} />)
          }
        </div>
      </div>

      < ToastContainer />
    </>
  )
}

export default AlbumsList
