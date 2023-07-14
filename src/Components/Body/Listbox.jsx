import React from 'react'
import ListItem from './ListItem'
import Loading from './MinorComponents/Loading'
import Error from './MinorComponents/Error'

function Listbox({ movies, onmovieClick, open1, setOpen1, isLoading, error }) {


  return (
    <>
    <div className='bg-slate-600 gap-2 md:flex-[.5] rounded-md p-3 overflow-y-scroll relative'>
        <div className='absolute right-2 top-1 bg-white text-black rounded-full p-1 px-2 ' onClick={() => setOpen1(!open1)}>
        <i className={`${ open1 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`}></i>
        </div>
        { open1 && 
        <>
        <h1 className='text-4xl text-white font-bold font-mono text-center mb-2'>Movies</h1>
        {isLoading && <Loading/>}

        {!isLoading && !error && 
          <ul>
            {movies?.length > 0 &&  
            (
              movies.map((movie, index) => (
              <ListItem movie={movie} key={index} onmovieClick={onmovieClick}/>
              ))
            )   
          }
          </ul>}
          
          {error && <Error message={error} />}
        </>
        }
    </div>
    </>
  ) 
}

export default Listbox