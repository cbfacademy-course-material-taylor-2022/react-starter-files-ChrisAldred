import React from 'react';
import PropTypes from 'prop-types';
import './BookStyle.css'

function addBook(title) {
  console.log(`The Book '${title}' was clicked`);
}

function Book({book: { id, saleInfo: {retailPrice}, volumeInfo: {title, authors, description, imageLinks: {thumbnail}}}}) {
  const titleStyle = {"fontWeight":"bold", "fontFamily":"verdana"};
  const authorStyle = {"fontWeight":"bold", "fontFamily":"verdana", "color":"#000000B0"};
  const descriptionStyle = {"fontFamily":"verdana"};
  const priceStyle = {"fontWeight":"bold","fontSize":"1.1em", "fontFamily":"verdana"};
  const divStyle = {"borderBottom":"1px solid #afafaf", "padding":"10px", "minHeight": "216px"};
  const inlineDivStyle = {"display": "inline"};
  const leftDiv = {"float":"left", "padding":"10px"};

  return(
    <main>
      <div key={id} style={divStyle}>
        <div style={leftDiv}>
          <img src={thumbnail} alt={title}/>
        </div>
        <div style={inlineDivStyle}>
          <h3 style={titleStyle}>{title}</h3>
          <p style={authorStyle}>by {authors.join(', ')}</p>
          {retailPrice && <p style={priceStyle}>£{retailPrice.amount}</p>}
          <p style={descriptionStyle}>{description
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
