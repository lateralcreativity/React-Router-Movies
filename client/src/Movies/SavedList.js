import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`/movies/${movie.id}`}><span className="saved-movie" key={movie.id}>{movie.title}</span></NavLink>
      ))}
      <div className="home-button"><Link to='/'>Home</Link></div>
    </div>
  );
}