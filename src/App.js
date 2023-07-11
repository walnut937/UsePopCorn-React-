import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header'
import Listbox from "./Components/Body/Listbox";
import MovieInfo from "./Components/Body/MovieInfo";
import Watchlist from "./Components/Body/Watchlist";



function App() {

  const [selectedmovie, setSelectedmovie] = useState(null);
  const [open1, setOpen1] = useState(true); 
  const [open2, setOpen2] = useState(true); 
  const [watchlist, setWatchlist] = useState([]);
  // const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const movies =[
    {id: 1,
     name: 'Inception',
     date: '16 July 2010', 
     duration: '169 min', 
     genre:['Adventure, ', 'Fantasy, ', 'phsycological'], 
     type: 'Movie', 
     rating: 8.9, 
     year: 2010, 
     img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
     desc:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."},
    
    {id: 2, 
    name: 'Intersteller', 
    date: '07 Nov 2014', 
    duration: '169 min', 
    genre:['Adventure, ', 'Drama, ', 'Sci-fi '],
    type: 'Movie', 
    rating: 9.4, 
    year: 2015, 
    img: 'https://i.pinimg.com/originals/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg',
    desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."},

    {id: 3, 
    name: 'Demon Slayer',
    date: '06 Feb 2019', 
    duration: '23 min', 
    genre:['Adventure, ', 'Drama, ', 'Demons, ', 'Survival'],
    type: 'Series', 
    rating: 8.6, 
    year: 2019, 
    img: 'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg',
    desc: "It follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon."},

    {id: 4, 
    name: 'Attack On Titan',
    date: '7 April 2013', 
    duration: '120 min', 
    genre:['Adventure, ', 'Drama, ', 'Sci-fi, ', 'Action, ', 'Gore'],
    type: 'Series', 
    rating: 9.8, 
    year: 2013, 
    img: 'https://flxt.tmsimg.com/assets/p10701949_b_v9_ah.jpg',
    desc: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters."}
  ];


  // fetch is removed due to API restriction
  // const API = 'http://www.omdbapi.com/?apikey=2ad92fe1'

  // const searchmovies = async(title) => {
  //   const response = await fetch(`${API}&s=${title}`)
  //   const data = await response.json()
  //   setMovies(data.Search)  
  //   console.log(data.Search);
  // }

  // useEffect(() => {
  //   searchmovies(search)
  // }, [search]);

  //getting the index of a movie 
  function onmovieClick(index) {
    setSelectedmovie(index);
  }

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

  // checking whether the selected movie is null or not
  const movie = selectedmovie !== null ? movies[selectedmovie] : null;
  return (
    <>
    <div className="h-screen bg-slate-900 px-5 py-1">
      <Header search={search} setSearch={setSearch} movies={movies}/>
      <div className="md:flex gap-10 h-[480px] px-10">
        <Listbox open1={open1} setOpen1={setOpen1} onmovieClick={onmovieClick} movies={movies} />
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
