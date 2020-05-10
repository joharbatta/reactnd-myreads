import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBookList from "./SearchBookList";
import * as BooksAPI from "../BooksAPI";

export default class SearchBook extends Component {

  state = {
    query: "",
    result: [],
  };

  searchResult = (query) => {
    this.setState({ query: query });
    if (query.trim() !== "") 
    {
      BooksAPI.search(query).then((result) => {
        if (result.error) 
        {
          this.setState({ result: [] });
        } else 
        {
          result.map((result) => {
            this.props.books.forEach((book) => {
              if (book.id === result.id) 
              result.shelf = book.shelf;
            });
            return result;
          });
          this.setState({ result: result });
        }
      });
    }
    else{
      this.setState({ result: [] });
    }
  };

  render() {
    const { query, result } = this.state;
    const { updateBookShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by category"
              className="search-contacts"
              value={query}
              onChange={(event) => this.searchResult(event.target.value)}
            />
          </div>
        </div>
        <SearchBookList updateBookShelf={updateBookShelf} books={result} />
      </div>
    );
  }
}
