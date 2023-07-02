import React, { useState } from 'react'
import { useContador } from '../../hooks/useContador'

const Contador = ({stock, inicial}) => {

    const {contador, incrementar, decrementar} = useContador(inicial, stock)

  return (
    <>
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={incrementar}>+</button>
    </>
  )
}

export default Contador