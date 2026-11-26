export default function MenuCard({ item, onAdd }) {
  return (
    <div className="menu-card">
      <h3>{item.name}</h3>
      <p className="menu-desc">{item.desc}</p>
      <div className="menu-row">
        <span className="menu-price">${item.price}</span>
        <button onClick={() => onAdd(item)}>Add to order</button>
      </div>
    </div>
  )
}
