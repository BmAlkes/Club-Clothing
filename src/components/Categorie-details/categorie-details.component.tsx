import { getDocs, query, collection, where } from 'firebase/firestore'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { categoryConverter } from '../../converters/firebase.converters'
import Category from '../../types/category.types'
import { db } from '../../config/firebase.config'
import Loading from '../loading/loading'
import { BiChevronLeft } from 'react-icons/bi'
import {
  IconContainer,
  Container,
  CategoryTitle,
  ProductsContainer
} from './categorie-details'
import ProductItem from '../product-item/product-item'
import { useNavigate } from 'react-router-dom'

interface CategoryDetailsProps {
  categoryId: string
}

const CategorieDetailsComponent: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()
        setCategory(category)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])
  if (isLoading) return <Loading />
  const handleBack = () => {
    navigate('/')
  }
  return (
    <>
      <Container>
        <CategoryTitle>
          <IconContainer onClick={handleBack}>
            <BiChevronLeft size={36} />
          </IconContainer>
          <p>Explorar {category?.displayName}</p>
        </CategoryTitle>
        <ProductsContainer>
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  )
}

export default CategorieDetailsComponent
