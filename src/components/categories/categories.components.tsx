import { useState, useEffect } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

// Styles
import CategoryItem from '../category-item/category-item'
import { CategoriesContainer, CategoriesContent } from './Categories.style'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fecthCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      setCategories(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fecthCategories()
  }, [])

  return (
    <CategoriesContainer>
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
