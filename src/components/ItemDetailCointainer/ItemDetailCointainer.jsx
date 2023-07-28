import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProducto } from '../../js/asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailCointainer = () => {
    const [producto, setProducto] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        getProducto(id)
            .then(response => setProducto(response))
    }, [id])

  return (
    <div>
        <ItemDetail {...producto} />
    </div>
        
  )
}

export default ItemDetailCointainer