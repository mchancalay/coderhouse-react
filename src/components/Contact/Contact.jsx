import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [nombre, SetNombre] = useState("")
    const [email, SetEmail] = useState("")
    const [mensaje, SetMensaje] = useState("")

    const enviarMensaje = event => {
        event.preventDefault();
        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        }

        emailjs.send('service_jc80h5e','template_e8a1zjb',templateParams,'5aHz6tgtDi2iWTx0f')
            .then(() => {
               alert('Correo enviado!');
            })
            .catch(() => {
                alert('Error!');
             })

        SetNombre("")
        SetEmail("")
        SetMensaje("")
    }

  return (
    <>
        <h1>Contacto</h1>
        <form action="" onSubmit={enviarMensaje}>
            <label htmlFor="">Nombre</label>
            <input type="text" value={nombre} onChange={e => SetNombre(e.target.value)} />

            <label htmlFor="">Correo</label>
            <input type="text" value={email} onChange={e => SetEmail(e.target.value)} />

            <label>Mensaje</label>
            <textarea cols="30" rows="10" value={mensaje} onChange={e => SetMensaje(e.target.value)}></textarea>

            <button type='submit'>Enviar</button>
        </form>
    </>
  )
}

export default Contact