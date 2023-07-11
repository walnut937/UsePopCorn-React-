import React from 'react'

function ListItem({ movie, onmovieClick }) {
  
  

  return (
    <>
    <li  className='flex flex-col md:flex-row md:items-center mb-1 gap-5 p-3 rounded-md border-white border-[1px] text-white'>
        <img className='md:w-1 w-52 mx-auto  rounded-md flex-[.2]' src={movie.img} alt="" />
        <div className='flex flex-col md:gap-3 flex-[.8] font-mono'>
            <h1 className='text-4xl'>{movie.name}</h1>
            <h1 className='text-md'>{movie.type}</h1>
            <div className='flex items-center'>
                <p className='text-md'><span>📆</span> {movie.year} <span><button onClick={() => onmovieClick(movie.id - 1)}  ><i className="fa-solid fa-circle-info cursor-pointer"></i></button></span></p>
                <h1 className='ml-auto'>⭐{movie.rating}</h1>
            </div>
        </div>
    </li>
    </>                                    
  )
}

export default ListItem