import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../services/config'

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    // Accion al enviar
      addDoc(collection(db, "usuarios"),{
        nombre,
        apellido,
        correoElectronico:correo
      })
    // Fin accion al enviar

    setNombre("")
    setApellido("")
    setCorreo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input 
        id='nombre'
        type="text" 
        placeholder='Nombre' 
        onChange={e => setNombre(e.target.value)}
        value={nombre}
      />
      <label htmlFor="apellido">Apellido</label>
      <input 
        id='apellido'
        type="text" 
        placeholder='Apellido' 
        onChange={e => setApellido(e.target.value)}
        value={apellido}
      />
      <label htmlFor="correo">Correo electrónico</label>
      <input 
        id='correo'
        type="text" 
        placeholder='Correo electrónico' 
        onChange={e => setCorreo(e.target.value)}
        value={correo}
      />
      <button type='submit'>Comprar</button>
    </form>
  )
}

export default Formulario