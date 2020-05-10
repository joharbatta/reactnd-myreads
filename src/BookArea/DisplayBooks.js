import React, { Component } from "react";
import Book from "./Book";

 class DisplayBooks extends Component {
      
  render() {
    const { bookshelfName, bookslist } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
        {bookslist
            .filter((book) => book.shelf === bookshelfName)
            .map((book, index) => (
                
              <li key={index}>
                <Book
                  books={book}
                />
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
export default DisplayBooks;
