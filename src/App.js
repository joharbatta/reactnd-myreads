import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from "./Header";
import SearchWindow from "./SearchWindow"
import Bookshelf from "./BookArea/Bookshelf"
import { Route } from "react-router-dom";


class BooksApp extends React.Component {
  state = {
    books: [],
  }

   async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    book.shelf = shelf;
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat(book),
    }));
  };

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={()=>(
        <div className="list-books">
        <Header />
        <div>
        <Bookshelf
          bookshelfTitle="Currently Reading"
          bookshelfName="currentlyReading"
          updateBookShelf={this.updateBookShelf}
          books={this.state.books}
         
        />
        <Bookshelf
          bookshelfTitle="Want to Read"
          bookshelfName="wantToRead"
          books={this.state.books}
          updateBookShelf={this.updateBookShelf}
      
        />
        <Bookshelf
          bookshelfTitle="Read"
          bookshelfName="read"
          books={this.state.books}
          updateBookShelf={this.updateBookShelf}
        
        />
      </div>
        <SearchWindow/>
      </div>
      )}
      />

      </div>
    )
  }
}

export default BooksApp
