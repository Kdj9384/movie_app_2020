import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import "./Movie.css";

function Movie({
  id,
  rating,
  runtime,
  year,
  title,
  summary,
  coverImage,
  genres,
}) {
  return (
    <div className="movie">
      <img src={coverImage} alt={title} title={title} />
      <div className="movie__data">
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              title: title,
              year: year,
              rating: rating,
              runtime: runtime,
              summary: summary,
              coverImage: coverImage,
              genres: genres,
            },
          }}
        >
          <h3 className="movie__titile">{title}</h3>
        </Link>

        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 100)} ...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  runtime: propTypes.number.isRequired,
  year: propTypes.number.isRequired,

  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  coverImage: propTypes.string.isRequired,

  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
