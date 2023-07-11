import React from 'react'
import Search from './Search'

function Header({ movies, search, setSearch }) {
  return (
    <>
        <nav className='bg-purple-600 flex items-center justify-between px-2 gap-3 lg:px-10 mb-3 rounded-md'>
            <h1 className='text-lg lg:text-2xl font-bold font-mono text-white'>UsePorpCorn</h1>
            <div>
                <Search search={search} setSearch={setSearch}/>
            </div>
            <div className='hidden lg:block'>
                <h1 className='text-xl font-medium text-white'>Found {movies.length} results</h1>
            </div>
        </nav>
    </>
  )
}

export default Header