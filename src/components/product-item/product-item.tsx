import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.style'

// Utilities
import Product from '../../types/product.type'
import CustomButton from '../custom-buttton/CustomButton'
import { CartContext } from '../../contexts/cart.context'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)
  const handleAddToCart = () => {
    addProductToCart(product)
  }
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus size={22} />}
          onClick={handleAddToCart}>
          add to the cart
        </CustomButton>
      </ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
