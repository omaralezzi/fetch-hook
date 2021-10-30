import React from "react";

import useFetch from "./customHooks/useFetch";

import "./App.css";

const App = () => {
  const URL = "https://fakerapi.it/api/v1/books";
  const initialState = {};

  const results = useFetch(URL, initialState);

  //If there is no data show loading text
  if (!results || !results.data || results.data.length === 0) {
    return "Loading....";
  }

  // // //Otherwise show the book information
  const bookList = results.data.map((book) => (
    <li key={book.isbn}>
      <div>
        <p>
          <span>Title:</span> {book.title}
        </p>
        <p>
          <span>Author:</span> {book.author}
        </p>
        <p>
          <span>ISBN:</span> {book.isbn}
        </p>
        <p>
          <span>Published:</span> {book.published}
        </p>
      </div>
    </li>
  ));

  return <main>{bookList}</main>;
};

export default App;
