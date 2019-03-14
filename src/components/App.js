import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID cbefb7b2ce25d1fdbf242be7fbf7f3cc482ee5628a19b4b6e4ad0b062892907f"
      }
    });
    // .then(res => {
    //   console.log(res.data.results);
    // });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
