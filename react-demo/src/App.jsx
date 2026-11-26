import { useState } from 'react'
import './App.css'
import { MENU_ITEMS, CATEGORIES } from './data/menu.js'
import MenuCard from './components/MenuCard.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])

  const shownItems = category === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === category)

  function addToOrder(item) {
    setCart((oldCart) => {
      const found = oldCart.find((c) => c.id === item.id)
      if (found) {
        return oldCart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      }
      return [...oldCart, { ...item, qty: 1 }]
    })
  }

  function removeFromOrder(id) {
    setCart((oldCart) => oldCart.filter((c) => c.id !== id))
  }

  return (
    <div className="app">
      <header>
        <h1>Ember &amp; Oak</h1>
        <p>Wood-fired kitchen — interactive menu built with React</p>
      </header>

      <div className="filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={cat === category ? 'active' : ''}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <main>
        <section className="menu-grid">
          {shownItems.map((item) => (
            <MenuCard key={item.id} item={item} onAdd={addToOrder} />
          ))}
        </section>
        <Cart cart={cart} onRemove={removeFromOrder} onClear={() => setCart([])} />
      </main>

      <footer>
        <p>Sample project by Ahmed Yousafzai — React demo (components, props &amp; state).</p>
      </footer>
    </div>
  )
}
