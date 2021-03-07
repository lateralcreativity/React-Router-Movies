import React from 'react';
import {useLocation} from 'react-router-dom';

export default function MovieCard (props) {
  let location = useLocation();
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {stars ? <h3>Actors</h3> : null}

        {stars ? stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        )) : null}
      </div>
      {location.pathname.includes('/movies') ? <div className="save-button" onClick={() => props.addToSavedList(props.movie)}>Save</div> : null}
    </div>
  );
}