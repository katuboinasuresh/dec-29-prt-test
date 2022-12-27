import  { useState } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [sTerm, setSTerm] = useState('');
  const onInputChange = (e) => {
    setSTerm(e.target.value);
  }
  const [books, setBooks] = useState({ items: [] });
  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchdata = async () => {
      // Ajax call to API using Axios
      const result = await axios.get(`${API_URL}?q=${sTerm}`);
      setBooks(result.data);
  }

  // Submit handler
  const onSubmitHandler = (e) => {
      // Prevent browser refreshing after form submission
      e.preventDefault();
      // Call fetch books async function
      fetchdata();
  }
  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <h1 >find you'r books</h1>
          <p><input
            type="search"
            placeholder="books you need.,"
            value={sTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button></p>
        </label>
      </form>
      <ul>
        {
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default App;