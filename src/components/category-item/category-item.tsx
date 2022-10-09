import React, { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import { CategorieItemContainer, CategoryName } from './Categorie-item.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategorieItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorer</p>
      </CategoryName>
    </CategorieItemContainer>
  )
}

export default CategoryItem
