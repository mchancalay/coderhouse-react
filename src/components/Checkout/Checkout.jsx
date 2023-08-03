import React, { useState } from 'react'
import Formulario from '../Formulario/Formulario'


const Checkout = () => {
  const [ordenId, setOrdenId] = useState(null);
  
  return (
    <div>
        <Formulario setOrdenId={setOrdenId}/>

        {ordenId && <h2>Compra realizada con exito! ID:{ordenId}</h2>}
    </div>
  )
}

export default Checkout