import React from 'react'
import Watchlistitem from './Watchlistitem'

function Watchlist({ open2, setOpen2, watchlist, remove }) {
  return (
    <>
        <div className='bg-slate-600 gap-2 md:flex-[.5] rounded-md p-3 overflow-y-scroll relative'>
          <div className='absolute right-2 top-1 bg-white text-black rounded-full p-1 px-2 ' onClick={() => setOpen2(!open2)}>
            <i className={`${ open2 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}`}></i>
          </div>
          {
            open2 &&
            <>
            <h1 className='text-3xl text-white text-center font-bold font-mono'>Watchlist</h1>
            <div className=''>
            <ul>
              {watchlist.map((list, index) => (
              <Watchlistitem list={list} key={index} remove={remove} />
              ))}
          </ul>
            </div>
            </> 
          }

        </div>  
    </>
  )
}

export default Watchlist