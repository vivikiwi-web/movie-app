import React from "react";
import axios from "axios";
import Movie from './Movie';
import "./App.scss";

class App extends React.Component {

  state = {
    isLoading: true, // loading page state
    movies: [] // movie list from API
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false })
  }

  /**
   * When page is rendered call this method (default by ReactJs)
   */
  componentDidMount() {
    this.getMovies();
  }
  render() {

    const {isLoading, movies} = this.state;

    return (
      <section className="container">

        { isLoading ? 
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        : movies.map( movie => {
            return (
              <div className="movies">
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  year={movie.year}
                  genres={movie.genres}
                  slug={movie.slug} />
              </div>
            )
          })
        }

      </section>
    );

  }

}

export default App;
