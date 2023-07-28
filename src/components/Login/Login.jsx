import React, { useState } from 'react'

const Login = () => {
    const [verificado, setVerificado] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');

    const iniciarSesion = e => {
        e.preventDefault()
        if(usuario === 'a' && clave === '1'){
            setVerificado(true)
        }
    }

    const cerrarSesion = () => {
        setVerificado(false)
    }


  return (
    <>
        {
            verificado ? <button onClick={cerrarSesion}>Cerrar sesion</button> : (
                <form>
                    <label htmlFor="username">Usuario</label>
                    <input 
                        type="text" 
                        id='username'
                        onChange={e => setUsuario(e.target.value)} 
                    />

                    <label htmlFor="password">Clave</label>
                    <input 
                        type="password" 
                        id='password'
                        onChange={e => setClave(e.target.value)}
                    />

                    <button onClick={iniciarSesion}>Iniciar sesion</button>
        
                </form>
            )
        }
    </>
  )
}

export default Login