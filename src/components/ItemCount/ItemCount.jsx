import React, { useState } from 'react'
import { useContador } from '../../hooks/useContador'

const Contador = ({stock, inicial, addCart}) => {

    const {contador, incrementar, decrementar} = useContador(inicial, stock)

  return (
    <>
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar}>+</button>
        <button onClick={() => addCart(contador)}>Agregar al carrito</button>
    </>
  )
}

export default Contador