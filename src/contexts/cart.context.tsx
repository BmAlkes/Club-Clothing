import { createContext, FunctionComponent, useState } from 'react'
import CartProducts from '../types/cart.types'

interface ICartContext {
  isVisible: boolean
  toogleCart: () => void
  products: CartProducts[]
}
interface Props {
  children: React.ReactNode
}
const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toogleCart: () => {}
})

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, seProducts] = useState<CartProducts[]>([])
  const toogleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toogleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
