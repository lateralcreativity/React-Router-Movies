import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies ? props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard key={movie.id} movie={movie}/>
        </Link>
      )) : <div>Loading...</div>}
    </div>
  );
}