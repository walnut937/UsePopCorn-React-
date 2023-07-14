import React, { useState, useEffect } from "react";
import Header from './Components/Header/Header'
import Listbox from "./Components/Body/Listbox";
import MovieInfo from "./Components/Body/MovieInfo";
import Watchlist from "./Components/Body/Watchlist";

const APIKEY = '972cd29419mshc0e002ce38ffd15p1cb0ecjsn1a85bd82ea40';


function App() {

  const [selectedmovie, setSelectedmovie] = useState(null);
  const [open1, setOpen1] = useState(true); 
  const [open2, setOpen2] = useState(true); 
  const [watchlist, setWatchlist] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');


  // const searchmovies = async(title) => {
  //   const url = (`https://imdb8.p.rapidapi.com/auto-complete?q=${title}`);
  //   const options = { 
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': (`${APIKEY}`),
  //       'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  //     }
  //   };
    
  //   try {
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     setMovies(data.d)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


    useEffect(() => { 
      const searchmovies = async(title) => {
        try {
        setIsLoading(true);
        const url = (`https://imdb8.p.rapidapi.com/auto-complete?q=${title}`);
        const options = { 
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': (`${APIKEY}`),
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
          }
        };
          const response = await fetch(url, options);
          if(!response.ok) 
          throw new Error("Something went wrong with fetching Movies");

          const data = await response.json();
          console.log(data)
          if(data.response === 'false') 
          throw new Error("Movie not Found");

          setMovies(data.d)
        } catch (error) {
          setError(error.message)
        } finally {
          setIsLoading(false);
        }
      }
      searchmovies('doraemon')
    }, []);


  //getting the index of a movie 
  function onmovieClick(id) {
    setSelectedmovie(id);
  }

  // checking whether the selected movie is null or not
  const movie = movies?.find((movie) => movie.id === selectedmovie);

  //creating object of watchlist
  function watchlistarray(movie){
    const isMovieAlreadyAdded = watchlist.some((item) => item.id === movie.id)
    if(!isMovieAlreadyAdded){
      setWatchlist(watchlist => ([...watchlist, movie]));
    }
  }



  //removing the values from the watchlist array
  function remove(id){
    setWatchlist(prev => {
      return prev.filter((watchlist) => watchlist.id !== id);
    })
  }


  return (
    <>
    <div className="h-screen bg-slate-900 px-5 py-1">
      <Header search={search} setSearch={setSearch} movies={movies}/>
      <div className="md:flex gap-10 h-[480px] px-10"> 
        <Listbox error={error} isLoading={isLoading} open1={open1} setOpen1={setOpen1} onmovieClick={onmovieClick} movies={movies} /> 
        {
          movie ? 
          (
            <MovieInfo watchlist={watchlist} watchlistarray={watchlistarray} setSelectedmovie={setSelectedmovie} movie={movie} />
          ) : (
            <Watchlist remove={remove} watchlist={watchlist} open2={open2} setOpen2={setOpen2} />
          )
        }
      </div>
    </div>
    </>
  );
}

export default App;
