import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../js/asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    id ? 
      getProductosPorCategoria(id)
        .then(response => setProductos(response)) :
        getProductos()
          .then(response => setProductos(response))
 
  },[id])

  return (
    <div className='container'>
        <h2 className='products__title'>Mis productos</h2>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer