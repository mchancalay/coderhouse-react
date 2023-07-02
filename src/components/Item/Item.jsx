import React from 'react' 
import { Link } from 'react-router-dom';

const Item = ({id,nombre, imagen, precio}) => {
    const alt = `${nombre} imagen`
  return (
    <Link to={`/item/${id}`} >
      <article className='producto'>
        <img className='producto__img' src={imagen} alt={alt} />
        <h3 className='producto__title'>{nombre}</h3>
        <p className='producto__price'>{precio}</p>
      </article>
    </Link>
  )
}

export default Item