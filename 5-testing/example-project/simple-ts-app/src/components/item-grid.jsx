import { ReactComponent as EthLogo } from "../assets/eth-logo.svg"
import "./item-grid.css"
import "./scheleton.css"

function Scheleton() {
  return (
    <section className="item-grid">
      {Array.from({ length: 5 }).map((_, i) => (
        <article className="scheleton-item" key={`scheleton-${i}`}>
          <div className="scheleton-title" />
          <div className="scheleton-img" />
          <div className="scheleton-card-info" />
        </article>
      ))}
    </section>
  )
}

function ItemGrid({ items, onItemClick }) {
  if (items.length === 0) {
    return <Scheleton />
  }

  return (
    <section className="item-grid">
      {items.map((item, i) => (
        <article className="item-card" onClick={() => onItemClick(item)} key={`item-${i}`}>
          <span>{item.name}</span>
          <img src={item.imageUrl} alt={`item named ${item.name}`} />
          <div className="item-card-info">
            <span className="item-price">{item.price}</span>
            <EthLogo className="eth-logo" />
          </div>
        </article>
      ))}
    </section>
  )
}

export default ItemGrid
