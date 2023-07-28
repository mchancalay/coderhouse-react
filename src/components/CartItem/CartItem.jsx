import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const CartItem = ({item, unidades}) => {
  const {deleteProducto} = useContext(CarritoContext);

  return (
    <>
      <h3>{item.nombre}</h3>
      <h4>{item.cantidad}</h4>
      <img style={{ width: '50px' }} src={item.imagen} />
      <button onClick={() => deleteProducto(item.id)}>Eliminar</button>
    </>
    

  )
}

export default CartItem