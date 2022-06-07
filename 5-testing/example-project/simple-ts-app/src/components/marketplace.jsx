import React from "react"
import { getItems } from "../services/api.js"
import ItemGrid from "./item-grid"
import Cart from "./cart"
import "./marketplace.css"

function Marketplace() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    getItems().then(setItems)
  }, [])

  const onItemClick = (item) => {
    setCartItems((carItems) => [item, ...carItems])
  }

  return (
    <main className="marketplace">
      <Cart items={cartItems} />
      <ItemGrid items={items} onItemClick={onItemClick} />
    </main>
  )
}

export default Marketplace
