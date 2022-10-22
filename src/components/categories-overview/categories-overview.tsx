import React, { useContext, useEffect } from 'react'
import { CategoryContext } from '../../contexts/categoriesContext'
import CategoryOverview from '../category-overview/category-overview'
import { Container } from './categories-overview.styles'

const CategoriesOverview = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  })

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
