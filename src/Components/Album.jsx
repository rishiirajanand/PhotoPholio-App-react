import { useNavigate } from 'react-router-dom'
import gallary from '../Assets/images/gallery.png'

function Album({album}) {

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate('/album')
  }

  return (
    <div onClick={handleClick} className="w-[10rem] min-h-[8rem] bg-zinc-200 px-1 pt-1 pb-10 rounded-t-md hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
        <div className="bg-zinc-50 w-full h-full flex justify-center items-center rounded">
            <img className='w-[50px] object-cover' src={gallary} alt="gallary logo" />
        </div>
        <h1 className='text-center mt-2 font-semibold'>
            {album}
        </h1>
    </div>
  )
}

export default Album
