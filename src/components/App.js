import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
    termSearched: ""
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });
    // .then(res => {
    //   console.log(res.data.results);
    // });
    this.setState({ images: response.data.results, termSearched: term });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Term searched: {this.state.termSearched}
        <br />
        Found: {this.state.images.length}
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
