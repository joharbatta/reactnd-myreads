import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from "./Header";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  render() {
    return (
      <div className="app">

      <Route exact path="/" render={()=>(
        <div className="list-books">
        <Header />
      </div>
      )}
      />
       
      </div>
    )
  }
}

export default BooksApp
