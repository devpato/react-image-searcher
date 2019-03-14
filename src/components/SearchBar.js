import React, { Component } from "react";

class SearchBar extends React.Component {
  state = {
    term: "Type a search term"
  };

  onInputClick() {
    if (this.state.term === "Type a search term") {
      this.setState({ term: "" });
    }
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              onClick={() => this.onInputClick()}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
