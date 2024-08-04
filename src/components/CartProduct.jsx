import Button from "react-bootstrap/Button"
import PropTypes from "prop-types"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { getProductData } from "../productsStore"

function CartProduct(props) {
  const cart = useContext(CartContext)
  const { id, quantity } = props
  const productData = getProductData(id)

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>${quantity * productData.price.toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  )
}

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default CartProduct
