# Ember & Oak — Restaurant Menu (React Demo)

A small interactive restaurant menu app built with **React + Vite**. It is a sample project by Ahmed Yousafzai, made to practise real React: components, props and state.

## What it does

- Shows a restaurant menu (Ember & Oak) with dishes, prices and categories
- Filter the menu by category: All / Starters / Mains / Desserts / Drinks
- Add dishes to an order — the cart updates live, quantities add up, and the total is calculated automatically
- Remove a dish or clear the whole order

## React concepts used

- `useState` — the selected category and the cart are kept in state
- **Components** — `App`, `MenuCard`, `Cart` (each in its own file)
- **Props** — data and functions passed down, e.g. `item` and `onAdd` into `MenuCard`
- `.map()` and `.filter()` — rendering the menu list from data

## How to run

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

## Files

- `src/App.jsx` — main app, holds category + cart state
- `src/data/menu.js` — menu items and categories
- `src/components/MenuCard.jsx` — one dish card
- `src/components/Cart.jsx` — the order/cart panel
- `src/App.css` — styling
