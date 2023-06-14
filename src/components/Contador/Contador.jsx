import React, { useState } from 'react'

const Contador = ({stock, inicial}) => {

    const [contador, setContador] = useState(inicial);

    const aumentar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <>
        <button onClick={decrementar}>-</button>
        <span>{contador}</span>
        <button onClick={aumentar}>+</button>
    </>
  )
}

export default Contador