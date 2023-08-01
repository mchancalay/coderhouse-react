import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, imgName, stock}) => {
  const [cantidad, setCantidad] = useState(0)
  const { addProducto } = useContext(CarritoContext)

  const handlerCantidad = cantidad => {
    setCantidad(cantidad)
    const item = {id, nombre, precio, imgName}
    addProducto(item, cantidad)
  }

  const alt = `${nombre} imagen`
  const img = `../src/assets/stock/${imgName}.jpg`
  return (
    <div>
      <article className='producto-detail'>
        <img className='producto-detail__img' src={img} alt={alt} />
        <h3 className='producto-detail__title'>{nombre}</h3>
        <p className='producto-detail__price'>{precio}</p>
        {
          cantidad > 0 ? <Link to="/">Terminar compra</Link> : <ItemCount stock={stock} inicial={1} addCart={handlerCantidad}/>
        }
      </article>
    </div>
  )
}

export default ItemDetail