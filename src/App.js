import React from "react";
import axios from "axios";
import Movie from './Movie';

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
      <div>
        { isLoading ? "Loading.." : movies.map( movie => {
            return <Movie key={movie.id} id={movie.id} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} year={movie.year} slug={movie.slug} />
          })
        }
      </div>
    );

  }

}

export default App;
