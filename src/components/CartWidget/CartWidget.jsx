import React, { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const CartWidget = () => {

  const [color, setColor] = useState("#d80e0e");
  const { unidades } = useContext(CarritoContext);

  useEffect(() => {
    if(unidades > 0){
      setColor("#07bc0c");
    } else {
      setColor("#d80e0e");
    }
  },[unidades])

  const regularCantidad = (unidades) => {
    if(unidades < 99){
      return unidades
    } else {
      return "+99"
    }
  }

  const imgUrl = '../../../src/assets/icons/carrito.png';

  return (
    <div className='carrito'>
      <div className='carrito__circulo' style={{backgroundColor: color}}><span className='carrito__cantidad'>{regularCantidad(unidades)}</span></div>
      <img className='carrito__icon' src={imgUrl} alt="carrito icon" />
    </div>
  )
}

export default CartWidget