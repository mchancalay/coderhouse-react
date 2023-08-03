import React, { useState } from 'react'
import Formulario from '../Formulario/Formulario'


const Checkout = () => {
  const [ordenId, setOrdenId] = useState(null);
  
  return (
    <div>
        { ordenId ? <h2>Compra realizada con exito! ID:{ordenId}</h2> : <Formulario setOrdenId={setOrdenId}/> }
    </div>
  )
}

export default Checkout