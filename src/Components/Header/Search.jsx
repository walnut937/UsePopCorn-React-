import React, { useState } from 'react'

function Search({ search, setSearch }) {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className='p-2 lg:w-96 flex items-center'>
      {/* <div className='flex items-center bg-purple-500 rounded-md'> */}
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" className={`outline-none rounded-md w-full lg:block p-2 bg-purple-500 focus:border-white focus:border-[1px] border-[1px] duration-300 ${isopen ? '' : 'hidden'} border-purple-500 caret-white text-white`} placeholder='Search Movies...' />
      {/* </div> */}
      { isopen ? (
        <i onClick={() => setIsopen(!isopen)} className="fa-solid fa-xmark block lg:hidden text-3xl p-2 lg:ml-auto text-white"></i>
        ) : (
        <i onClick={() => setIsopen(!isopen)} className="fa-solid fa-magnifying-glass block lg:hidden text-2xl p-2 lg:ml-auto text-white"></i>)
      }
    </div>
  )
}

export default Search