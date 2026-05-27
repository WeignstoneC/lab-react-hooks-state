import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const filteredProducts = sampleProducts.filter(
    (product) => category === 'all' || product.category === category
  )

  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    color: darkMode ? '#f5f5f5' : '#111111',
    minHeight: '100vh',
    padding: '2rem'
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div style={{ margin: '1rem 0' }}>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
