import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const CartItem = ({item, unidades}) => {
  const {deleteProducto} = useContext(CarritoContext);

  return (
    <>
      <h3 className='cartItem__title'>{item.nombre.toUpperCase()}</h3>
      <h4 className='cartItem__cantidad'>{item.cantidad}</h4>
      <h4 className='cartItem__unidades'>{unidades}</h4>
      <img className='cartItem__img' style={{ width: '50px' }} src={item.imagen} />
      <button className='cartItem__nombre__btn--eliminar' onClick={() => deleteProducto(item.id)}>Eliminar</button>
    </>
    

  )
}

export default CartItem