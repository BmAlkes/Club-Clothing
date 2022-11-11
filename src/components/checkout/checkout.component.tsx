import React, { FunctionComponent, useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../custom-buttton/CustomButton'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  return (
    <CheckoutContainer>
      <CheckoutTitle>CheckOut</CheckoutTitle>
      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
        </>
      ) : (
        <p>Empty Cart</p>
      )}
      <CheckoutTotal> Total : ₪{productsTotalPrice}</CheckoutTotal>
      <CustomButton startIcon={<BsBagCheck />}>Finalize Purchase </CustomButton>
    </CheckoutContainer>
  )
}

export default Checkout
