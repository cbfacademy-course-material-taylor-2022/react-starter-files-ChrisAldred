import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookList from './components/BookList';
import Header from './components/Header';
import About from './pages/About';
import Search from './components/Search';
import data from './models/books.json';

function App() {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  const [keyword, setKeyword] = useState('');

  function addToBookcase(id) {
    setBookcase(bookcase.concat(books.filter(book => book.id === id)));

    books.map(book => {
      if (book.id === id) {
        console.log(`The Book '${book.volumeInfo.title}' was clicked`);
      }
      return book;
    });
  }

  async function findBooks(value) {
		const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

  	const results = await fetch(url).then(res => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <Header />
            <h2>Welcome to the Bookcase App</h2>  
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>     
            <BookList books={books} addToBookcase={addToBookcase}/>
          </>
        } />
        <Route path="/bookcase" element={
          <>
            <Header />
            <h2>Welcome to your personal bookcase</h2>   
            <BookList books={bookcase} addToBookcase={addToBookcase}/>
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );  
}

export default App;