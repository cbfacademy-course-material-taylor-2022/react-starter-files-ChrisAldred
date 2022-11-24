import React from 'react';
import './AboutStyle.css'
import Header from '../components/Header'

function About() {
    return (
        <>
            <Header/>
            <div className="header">
                <h2>Welcome to the Bookcase Application</h2>
                <p>
                  The following application was created by Chris. 
                  This bookcase app displays a list of books that a user can save to a local bookcase.
                </p>
                <p>
                  Click on the "Add + " button to add a book to your bookcase. 
                  Use the search bar to find the latest books by name, author or description.
                </p>
            </div>
        </>
    )
}


export default About;