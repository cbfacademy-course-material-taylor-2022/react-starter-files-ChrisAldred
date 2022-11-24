import React from 'react';
import Book from './Book';

function BookList(props) {
  return props.books.map(book => <Book key={book.id} book={book} addToBookcase={props.addToBookcase} {...props}/>);
}

export default BookList;