import React from 'react'
import './App.css'
import Books from './components/Books'
import Filters from './components/Filters'
import responseBooks from "./mocks/books.json"
import { FilterContext } from './context/Filters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/Cart'

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

const useFilters = () => {
  const { filters, setFilters } = React.useContext(FilterContext)
  const filterProducts = (products) => {
    return products.filter((product) => {
      return ((product.genre === filters.category || filters.category === 'all') && product.pages <= filters.maxPage)
    })
  }
  return { filterProducts, setFilters, filters }
}

function App() {
  const { mappedBooks } = useBooks()
  const { filterProducts, setFilters, filters } = useFilters()
  const filteredBooks = filterProducts(mappedBooks)

  return (
    <React.Fragment>
      <div className='wrapper'>
        <CartProvider>
          <Cart />
          <Filters onChange={setFilters} filters={filters} />
          <Books products={filteredBooks} />
        </CartProvider>
      </div>
    </React.Fragment >
  )
}

export default App
