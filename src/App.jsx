import React from 'react'
import './App.css'
import Books from './components/Books'
import Filters from './components/Filters'
import responseBooks from "./mocks/books.json"

const useBooks = () => {
  const initialBooks = responseBooks.library
  const mappedBooks = initialBooks.map((item) => ({
    title: item.book.title,
    pages: item.book.pages,
    genre: item.book.genre,
    cover: item.book.cover,
    synopsis: item.book.synopsis,
    year: item.book.year,
    id: item.book.ISBN,
    author: item.book.author,

  }))
  return { mappedBooks }
}


function App() {
  const { mappedBooks } = useBooks()
  return (
    <React.Fragment>
      <Filters />
      <Books products={mappedBooks} />
    </React.Fragment >
  )
}

export default App
