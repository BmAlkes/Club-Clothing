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
import { useNavigate } from 'react-router-dom'

const Cart: FunctionComponent = () => {
  const navigate = useNavigate()
  const { isVisible, products, toggleCart, productsTotalPrice, productsCount } =
    useContext(CartContext)
  const checkout = () => {
    navigate('/checkout')
    toggleCart()
  }
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle> Cart</CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        {productsCount > 0 && (
          <>
            <CartTotal> Total: {productsTotalPrice} </CartTotal>
            <CustomButton
              startIcon={<BsCartCheck size={20} />}
              onClick={checkout}>
              Checkout
            </CustomButton>
          </>
        )}
        {productsCount === 0 && <p>Empty cart</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
