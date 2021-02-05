import React from "react";
import axios from "axios";

import Movie from "../components/Movie";

import "./Home.css";

class Home extends React.Component {
  // parent
  state = {
    isLoading: true,
    movies: [],
    test: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );

    const movie = movies.data.data.movies; // movie -> array 형태임

    this.setState({ movies: movie, isLoading: false });
    console.log(movie);
  };
  componentDidMount() {
    // 데이터를 받아오는 방법
    // 1. fetch()
    // 2. axios : fetch 위에서 동작하는 api
    this.getMovies();
  }

  render() {
    const isLoading = this.state.isLoading;
    // const {isLoading} = this.state; // what different??

    // const movies = this.state.movies;
    const { movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  coverImage={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
