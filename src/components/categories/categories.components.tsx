import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'

// Utilities
import Category from '../../types/category.types'

// Styles
import CategoryItem from '../category-item/category-item'
import { CategoriesContainer, CategoriesContent } from './Categories.style'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firebase.converters'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fecthCategories = async () => {
    try {
      const categoriesFromFireStore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFireStore.push(doc.data())
      })
      setCategories(categoriesFromFireStore)
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
