export default function Cart({ cart, onRemove, onClear }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your order</h2>
        <p>Nothing added yet — pick a dish from the menu.</p>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Your order</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name} × {item.qty}</span>
            <span>${item.price * item.qty}</span>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${total}</p>
      <button className="clear-btn" onClick={onClear}>Clear order</button>
    </div>
  )
}
