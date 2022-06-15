import React from "react";
import axios from "axios";

class App extends React.Component {

  state = {
    isLoading: true, // loading page state
    movies: [] // movie list from API
  };

  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  }

  /**
   * When page is rendered call this method (default by ReactJs)
   */
  asynccomponentDidMount() {
    this.getMovies();
    setTimeout( () => this.setState({isLoading: false}), 6000);
  }
  render() {

    const {isLoading} = this.state;

    return (
      <div>
        { isLoading ? "Loading.." : "Page loaded" }
      </div>
    );

  }

}

export default App;
