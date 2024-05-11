import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'
import Movies from './components/MovieContainer';
import WatchLater from './components/WatchLater';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [watchLaterList, setWatchLaterList] = useState([]);

  console.log(searchValue);

  const apiUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=2693b4642782876103cf44020cb0ce6f";
  const searchUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchValue}`;

  useEffect(() => {
    getMovies(apiUrl);
  }, [])

  async function getMovies(url) {
    try {
      const response = await fetch(url)
      const data = await response.json();
      const movies = data.results;
      console.log(movies);
      setMovies(movies)
    } catch (error) {
      console.log(error)
    }
  }

  const searchMovie = () => {
    if (searchValue != '') {
      getMovies(searchUrl);
    }
  }

  const handleOnClick = (movie) => {
    setWatchLaterList([...watchLaterList, movie])
  }

  const handleRemove = (movieToRemove) => {
    const updatedWatchLaterList = watchLaterList.filter((movie) => movie.id !== movieToRemove.id);
    setWatchLaterList(updatedWatchLaterList);
  };
  return (
    <>


      {/* ============== Search Bar ============ */}

      <div className="search_bar w-full h-16 flex justify-center items-center">
        <SearchBar value={searchValue} setValue={setSearchValue} searchMovie={searchMovie} />
      </div>

      <WatchLater watchLaterList={watchLaterList} removeFromWatchLater={handleRemove} />


      {/* ============== Movies container============ */}

      <div className="w-full items-center gap-6">
        <Movies movies={movies} onWatchLaterClick={handleOnClick} />
      </div>

    </>
  )
}