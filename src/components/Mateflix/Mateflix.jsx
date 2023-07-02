import React, { useEffect, useState } from 'react'

const Mateflix = () => {
    const [peliculas, SetPeliculas] = useState([])
    const [buscador, SetBuscador] = useState("")
    const KEY = 'bb26ba46'

    useEffect( () => {
        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${buscador}`)
            .then(response => response.json())
            .then(data => {
                SetPeliculas(data.Search)
            })
    }, [buscador])

    const handleSubmit = event => {
        let text = event.target.buscador.value
        event.preventDefault();
        SetBuscador(text)
        text = ''
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name='buscador' />
            <button type='submit'>Buscar</button>
        </form>
        <div>
            <ul>
            {
                peliculas === undefined ? <h2>No peli pa</h2> : 
                    peliculas.map( (pelicula, index) => {
                        return(
                            <li key={index}>
                                <img src={pelicula.Poster} alt="" />
                                <h3>{pelicula.Title}</h3>
                            </li>
                        )
                    })
            }
            </ul>
        </div>
    </>
  )
}

export default Mateflix