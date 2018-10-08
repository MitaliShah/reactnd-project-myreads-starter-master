import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state ={
  books:[]
  }
//Separate method to manage all the books here
manageBooks(){
  BooksAPI.getAll().then((books) => {
  this.setState({ books: books })
})
}

//Call this method when component is rendered to the DOM
componentDidMount(){
  this.manageBooks()
}

//Updates the books on the shelves
moveShelf = (book, shelf) =>{
  BooksAPI.update(book, shelf).then(() => {
    this.manageBooks()
})
}

  render() {    
    return (
      <div className="app">       
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp
