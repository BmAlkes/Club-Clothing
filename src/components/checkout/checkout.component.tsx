import axios from 'axios'
import React, { FunctionComponent, useContext, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../custom-buttton/CustomButton'
import Loading from '../loading/loading'
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchases = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )
      window.location.href = data.url
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <CheckoutContainer>
      {isLoading && <Loading />}
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
      <CustomButton startIcon={<BsBagCheck />} onClick={handleFinishPurchases}>
        Finalize Purchase
      </CustomButton>
    </CheckoutContainer>
  )
}

export default Checkout
