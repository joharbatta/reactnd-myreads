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
          books={this.state.books}
         
        />
        <Bookshelf
          bookshelfTitle="Want to Read"
          bookshelfName="wantToRead"
          books={this.state.books}
      
        />
        <Bookshelf
          bookshelfTitle="Read"
          bookshelfName="read"
          books={this.state.books}
        
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
