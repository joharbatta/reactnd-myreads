import React, { Component } from "react";

export default class Book extends Component {

  render() {
    const {books} = this.props;
    const coverUrl =
      books.imageLinks === undefined
        ? "http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        : books.imageLinks.thumbnail || books.imageLinks.smallThumbnail;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${coverUrl}"`,
            }}
          />
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">
          {books.authors ? books.authors.join(", ") : "Unknown"}
        </div>
      </div>
    );
  }
}
