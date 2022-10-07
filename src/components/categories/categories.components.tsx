import { useState, useEffect } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

//Styles
import './categories.styles.css'

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
    <div className="categories-container">
      <div className="categorie-content"></div>
    </div>
  )
}

export default Categories
