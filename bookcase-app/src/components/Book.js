import React from 'react';
import PropTypes from 'prop-types';
import './BookStyle.css'

function addBook(title) {
  console.log(`The Book '${title}' was clicked`);
}

function Book({book: { id, saleInfo: {retailPrice}, volumeInfo: {title, authors, description, imageLinks: {thumbnail}}}}) {


  return(
    <main>
      <div key={id} className="div">
        <div className="leftDiv">
          <img src={thumbnail} alt={title}/>
        </div>
        <div className="inlineDiv">
          <h3 className="title">{title}</h3>
          <p className="author">by {authors.join(', ')}</p>
          {retailPrice && <p className="price">£{retailPrice.amount}</p>}
          <p className="descriptionStyle">{description
            ? description.substring(0, 300) + "..."
            : "No description"}</p>
        </div>
        <div>
          <button className="addButton" onClick={() => addBook(title)}>
            + Add
          </button>
        </div>
      </div>
    </main>
);
}

Book.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
  	authors: PropTypes.array.isRequired,
  	description: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      "thumbnail": PropTypes.string.isRequired
    })
  }),
  saleInfo: PropTypes.shape({
  	retailPrice: PropTypes.shape({
      "amount": PropTypes.number.isRequired 
    })
  })
};

Book.defaultProps = {
  saleInfo : {
		retailPrice : {
      amount: 'No price provided'
    }
  }
};

export default Book;
