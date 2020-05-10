import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchWindow extends Component {

  render() {
    return (
      <div className="open-search">
        <Link to="/search" className="open-search-button">
        </Link>
      </div>
    );
  }
}

export default SearchWindow;
