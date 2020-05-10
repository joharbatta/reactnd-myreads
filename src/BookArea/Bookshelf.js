import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";

export class Bookshelf extends Component {

  render() {
    const { bookshelfTitle,bookshelfName, books,updateBookShelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <DisplayBooks
          bookslist={books}
          bookshelfName={bookshelfName}
          updateBookShelf={updateBookShelf}
        />
      </div>
    );
  }
}

export default Bookshelf;
