import React from 'react'

export const mensajeConTitulo = Mensaje => {
    return function() {
        return(
            <>
                <h4> Titulo</h4>
                <Mensaje/>
            </>
        )
    }
}

export const hoc = () => {
  return (
    <>
        <div>hoc</div>
    </>
  )
}
