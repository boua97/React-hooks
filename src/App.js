import React, { useState, useEffect } from 'react';
import MovieList from './componets/MovieList';
import Filter from './componets/Filter';
import Aboo from './componets/Namss';

import './App.css';
import Namss from './componets/Namss';

const films = [
  {
    id: 1,
    title: 'Hitman 2',
    description:
      'Hitman 2 Movies Collection: Hitman + Hitman: Agent 47 (2-Disc)',
    posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71lCYeODB6L._SL1324_.jpg',
    rating: 9,
    status: 'Released'
  },
  {
    id: 2,
    title: 'The Godfather',
    description:
      'An organized crime dynasty transitions from father to son.',
    posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515EPW7MZHL._AC_UF894,1000_QL80_.jpg',
    rating: 9.2,
    status: 'Released'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61VhwmtnJvL._AC_UF894,1000_QL80_.jpg',
    rating: 9.0,
    status: 'Released'
  }
]

const App = () => {
  const [movies, setMovies] = useState(films);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
      setMovies(storedMovies);
    }
  }, []);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    localStorage.setItem('movies', JSON.stringify([...movies, movie]));
  };

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="center_position">
        <Filter
        onFilter={({ title, rating }) => {
          setTitleFilter(title);
          setRatingFilter(rating);
        }}
      />
      < Namss onAddMovie={handleAddMovie} />
      </div>
      <MovieList
        movies={movies.filter((movie) => {
          return (
            movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            movie.rating >= ratingFilter
          );
        })}
      />
    </div>
  );
};

export default App;
