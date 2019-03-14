import React, { Component } from "react";

class SearchBar extends React.Component {
  state = {
    term: "Type a search term"
  };

  onInputClick = () => {
    if (this.state.term === "Type a search term") {
      this.setState({ term: "" });
    }
  };

  onSearch = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSearch}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
