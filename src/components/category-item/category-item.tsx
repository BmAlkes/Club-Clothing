import React, { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Category from '../../types/category.types'
import { CategorieItemContainer, CategoryName } from './Categorie-item.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategorieItemContainer
      backgroundImage={category.imageUrl}
      onClick={handleExploreClick}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorer</p>
      </CategoryName>
    </CategorieItemContainer>
  )
}

export default CategoryItem
