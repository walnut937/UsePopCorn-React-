import React, { useEffect, useState } from 'react'

function MovieInfo({ movie, setSelectedmovie, watchlistarray, watchlist }) {
    const [add, setAdd] = useState(false) 

    function send(mov){
        watchlistarray(mov);
        setAdd(!add)
    }

    const select = watchlist.find(item => item.id === movie.id)


    //using useeffect for the rerender of select constant
    useEffect(()=> {
        if(select){
            setAdd(true)
        }else{
            setAdd(false)
        }
    }, [select])

  return ( 
    <>
        <div className='bg-slate-600 gap-2 md:flex-[.5] rounded-md p-3 overflow-y-scroll'>
            <div className='bg-slate-500 relative flex gap-6 items-center rounded-lg'>
                <div className='absolute z-40 top-0 cursor-pointer' onClick={() => setSelectedmovie(null)}>
                    <i class="fa-solid fa-circle-arrow-left text-2xl text-white"></i>
                </div>
                <img className='w-32 rounded-lg' src={movie.img} alt={movie.name} />
                <div className='flex flex-col text-white font-mono gap-4'>
                    <h1 className='text-3xl'>{movie.name}</h1>
                    <h1 className='text-sm'><span>{movie.date}</span> • <span>{movie.duration}</span> </h1>
                    <p className='text-sm'>{movie.genre}</p>
                    <p className='text-sm'>⭐{movie.rating} IMDb rating</p>
                </div>
            </div>

            <h1 className='mt-2 text-white'>{add ? 'Watchlisted' : 'Add to Watchlist'} - <span className='bg-white text-black rounded-full p-1 px-2' onClick={() => send(movie)}><i className={`${ add ? 'fa-solid fa-check'  :'fa-solid fa-plus'}`}></i></span></h1>

            <div className='text-left text-white text-sm p-3 mt-20'>
                <h1>{movie.desc}</h1>
            </div>
    </div>
    </>
  )
}

export default MovieInfo