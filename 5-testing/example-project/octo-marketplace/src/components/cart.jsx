import { ReactComponent as EthLogo } from "../assets/eth-logo.svg"
import { ReactComponent as ShoppingCart } from "../assets/shopping-cart.svg"
import "./cart.css"


function Cart({ items }) {
  const total = items.length

  return (
    <div className="cart" role='banner'>
      <ShoppingCart className="cart-icon" />
      <span>{total}</span>
      <EthLogo className="eth-logo" />
    </div>
  )
}

export default Cart
