import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../services/config'
import { CarritoContext } from '../../context/CarritoContext'

const Formulario = ({ setOrdenId }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [confirmarCorreo, setConfirmarCorreo] = useState("");
  const [error, setError] = useState(null);

  const {carrito, total, unidades, addProducto, deleteProducto, vaciarCarrito} = useContext(CarritoContext);
  
  const handleSubmit = e => {
    e.preventDefault();

    if(!nombre || !apellido || !telefono || !correo || !confirmarCorreo){
      setError("Todos los campos son obligatorios.")
      return;
    }

    if(correo.toLocaleLowerCase() !== confirmarCorreo.toLocaleLowerCase()){
      setError("Los correos no coinciden.")
      return;
    }

    setError(null)

    // Accion al enviar


    const orden = {
        items: carrito.map(producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            unidades: producto.unidades
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        correo
    }
    
    addDoc(collection(db, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id)
        vaciarCarrito();
      })

    // Fin accion al enviar

    setNombre("")
    setApellido("")
    setTelefono("")
    setCorreo("")
    setConfirmarCorreo("")

  }

  return (
    <form onSubmit={handleSubmit}>

      {
        carrito.map(producto => 
          <div key={producto.item.id}>
            <h2>{producto.item.nombre}</h2>
            <h2>{producto.unidades}</h2>
            <h2>{producto.item.precio * producto.unidades}</h2>
          </div>
        )
      }

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
      <label htmlFor="telefono">Telefono</label>
      <input 
        id='telefono'
        type="number" 
        placeholder='Telefono' 
        onChange={e => setTelefono(e.target.value)}
        value={telefono}
      />

      <label htmlFor="correo">Correo</label>
      <input 
        id='correo'
        type="text" 
        placeholder='Correo' 
        onChange={e => setCorreo(e.target.value)}
        value={correo}
      />

      <label htmlFor="confirmarCorreo">Confirmar correo</label>
      <input 
        id='confirmarCorreo'
        type="text" 
        placeholder='Confirmar correo' 
        onChange={e => setConfirmarCorreo(e.target.value)}
        value={confirmarCorreo}
      />

      { error && <p>{error}</p> }

      <button type='submit'>Comprar</button>
    </form>
  )
}

export default Formulario