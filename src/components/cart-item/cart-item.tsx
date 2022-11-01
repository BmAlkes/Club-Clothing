import React, { FunctionComponent, useContext } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../contexts/cart.context'
import CartProducts from '../../types/cart.types'
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cartItem'

interface CartItemProps {
  product: CartProducts
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    removeProductsFromCart,
    increaseProductQuanty,
    decreaseProductQuantity
  } = useContext(CartContext)
  const handleRemoveClick = () => {
    removeProductsFromCart(product.id)
  }
  const handleIncreaseClick = () => {
    increaseProductQuanty(product.id)
  }
  const handleDecreaseClick = () => {
    decreaseProductQuantity(product.id)
  }
  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p> ₪ {product.price}</p>
        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncreaseClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={28} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
