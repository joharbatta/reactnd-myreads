import React, { Component } from "react";
import Book from "../BookArea/Book";

export default class SearchBookList extends Component {

  render() {

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {
            this.props.books.map((book, index) => (
            <li key={index}>
              <Book
                books={book}
                onUpdateBookShelf={(books, shelf) => {
                  this.props.updateBookShelf(book, shelf);
                }}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

