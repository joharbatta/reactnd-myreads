import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";

export class Bookshelf extends Component {

  
  render() {
    const {
      bookshelfTitle,
      bookshelfName,
      books,
    } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <DisplayBooks
          bookslist={books}
          bookshelfName={bookshelfName}
        />
      </div>
    );
  }
}

export default Bookshelf;
