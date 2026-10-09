import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import { Header } from './components/Header'
import { Screen } from './components/Screen'

function App() {
  const [books, setBooks] = useState([])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  const addBook = (title) => {
    const newBook = {
      cover: title.charAt(0).toUpperCase(),
      name: title,
      author: '',
      done: false,
      id: nanoid(),
    }
    setBooks(prev => [...prev, newBook])
  }

  const toggleRead = (id) => {
    setBooks(prev => prev.map(book =>
      book.id === id ? { ...book, done: !book.done } : book
    ))
  }

  const deleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <Screen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onToggleFilter={() => setShowOnlyUnread(prev => !prev)}
        onAdd={addBook}
        onToggleRead={toggleRead}
        onDelete={deleteBook}
      />
    </div>
  )
}

export default App
