import React from "react";

class App extends React.Component {

  state = {
    isLoading: true, // loading page state
    movies: [] // movie list from API
  };

  /**
   * When page is rendered call this method (default by ReactJs)
   */
  componentDidMount() {
    setTimeout( () => this.setState({isLoading: false}), 6000);
  }

  render() {

    const {isLoading} = this.state;

    return (
      <div>
        { isLoading ? "loading.." : "Page loaded" }
      </div>
    )

  }

}

export default App;
