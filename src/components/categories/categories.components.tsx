import { useState, useEffect, useContext } from 'react'
import { CategoryContext } from '../../contexts/categoriesContext'
// Utilities
import Category from '../../types/category.types'

// Styles
import CategoryItem from '../category-item/category-item'
import Loading from '../loading/loading'
import { CategoriesContainer, CategoriesContent } from './Categories.style'

const Categories = () => {
  const { fetchCategories, categories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
