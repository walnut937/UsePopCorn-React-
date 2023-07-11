import React from 'react'
import ListItem from './ListItem'

function Listbox({ movies, onmovieClick, open1, setOpen1 }) {


  return (
    <>
    <div className='bg-slate-600 gap-2 md:flex-[.5] rounded-md p-3 overflow-y-scroll relative'>
        <div className='absolute right-2 top-1 bg-white text-black rounded-full p-1 px-2 ' onClick={() => setOpen1(!open1)}>
        <i className={`${ open1 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`}></i>
        </div>
        { open1 && 
        <>
        <h1 className='text-4xl text-white font-bold font-mono text-center mb-2'>Movies</h1>
          <ul>
            {movies?.length > 0 ? 
            (
              movies.map((movie, index) => (
              <ListItem movie={movie} key={index} onmovieClick={onmovieClick}/>
              ))
            ) : (
              <h1 className='text-center text-white mt-32 text-3xl'>Search</h1>
            )  
          }
          </ul>
        </>
        }
    </div>
    </>
  ) 
}

export default Listbox