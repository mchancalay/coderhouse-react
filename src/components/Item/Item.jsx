import React from 'react' 
import { Link } from 'react-router-dom';

const Item = ({id,nombre, imgName, precio}) => {

    const alt = `${nombre} imagen`
    const img = `../src/assets/stock/${imgName}.jpg`
    const formatoPrecio = precio.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });


  return (
    <Link to={`/item/${id}`} >
      <article className='producto'>
        <img className='producto__img' src={img} alt={alt} />
        <h3 className='producto__title'>{nombre}</h3>
        <p className='producto__price'>{formatoPrecio}</p>
      </article>
    </Link>
  )
}

export default Item