import React from 'react'

const ItemDetail = ({id, nombre, precio, imagen}) => {
  const alt = `${nombre} imagen`
  return (
    <div>
      <article className='producto-detail'>
        <img className='producto-detail__img' src={imagen} alt={alt} />
        <h3 className='producto-detail__title'>{nombre}</h3>
        <p className='producto-detail__price'>{precio}</p>
      </article>
    </div>
  )
}

export default ItemDetail