import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg';
//5e798fa6
const API_URL = 'http://www.omdbapi.com?apikey=5e798fa6';

const movie1 = {
  "Title": "Spiderman and Grandma",
  "Year": "2009",
  "imdbID": "tt1433184",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')
  },[])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => {}}
         />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;