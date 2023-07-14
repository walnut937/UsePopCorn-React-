import React from 'react'

function Watchlistitem({ list, remove }) {

    function removeid(id){
        remove(id)
    }
    const Poster = list.i.imageUrl
  return (
    <>
        <li  className='flex flex-col md:flex-row md:items-center mb-1 gap-5 p-3 rounded-md border-white border-[1px] text-white'>
        <img className='md:w-1 w-52 mx-auto  rounded-md flex-[.2]' src={Poster} alt={list.l} />
        <div className='flex flex-col md:gap-3 flex-[.8] font-mono'>
            <h1 className='text-4xl'>{list.l}</h1>
            <h1 className='text-md'>{list.qid}</h1>
            <div className='flex items-center'>
                <p className='text-md'><span>📆</span> {list.y} <span><button onClick={() => removeid(list.id)}><i className="fa-solid fa-circle-xmark"></i></button></span></p>
                <h1 className='ml-auto'>⭐{list.rank}</h1>
            </div>
        </div>
    </li>
    </>
  )
}

export default Watchlistitem