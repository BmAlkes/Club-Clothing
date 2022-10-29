import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import CategorieDetailsComponent from '../../components/Categorie-details/categorie-details.component'
import Header from '../../components/header/header'

const CategorieDetails: FunctionComponent = () => {
  const { id } = useParams()
  if (!id) return null
  return (
    <>
      <Header />
      <CategorieDetailsComponent categoryId={id} />
    </>
  )
}

export default CategorieDetails
