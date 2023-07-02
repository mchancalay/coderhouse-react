import React from 'react'

const ItemDetail = ({id, nombre, precio, imagen}) => {
  const alt = `${nombre} imagen`
  return (
    <div>
      <article className=''>
        <img className='' src={imagen} alt={alt} />
        <h3 className=''>{nombre}</h3>
        <p className=''>{precio}</p>
      </article>
    </div>
  )
}

export default ItemDetail