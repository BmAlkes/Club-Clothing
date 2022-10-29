import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../contexts/categoriesContext'
import CategoryOverview from '../category-overview/category-overview'
import Loading from '../loading/loading'
import { Container } from './categories-overview.styles'

const CategoriesOverview = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  })
  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
