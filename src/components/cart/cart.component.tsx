import React, { FunctionComponent, useContext } from 'react'
import CustomButton from '../custom-buttton/CustomButton'
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item'

const Cart: FunctionComponent = () => {
  const { isVisible, products, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle> Cart</CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        <CartTotal> Total: </CartTotal>
        <CustomButton startIcon={<BsCartCheck />}>Checkout</CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
