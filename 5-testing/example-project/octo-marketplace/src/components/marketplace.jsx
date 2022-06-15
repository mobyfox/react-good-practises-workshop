import React from "react"
import { getItems } from "../services/api.js"
import ItemGrid from "./item-grid"
import Cart from "./cart"
import "./marketplace.css"
import { useCart } from '../hooks/use-cart'

function Marketplace({ admin }) {
  const { cartItems, onItemClick } = useCart()
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    getItems().then(setItems)
  }, [])

  return (
    <main className="marketplace">
      <Cart items={cartItems} />
      <ItemGrid items={items} onItemClick={onItemClick} />
    </main>
  )
}

export default Marketplace
