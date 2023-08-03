import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import categorias from '../../js/categorias.js';

// Importamos 'getDocs' para obtener los documentos de una coleccion (coleccion=array, documentos=objetos).
// 'collections' creo una referencias a la coleccion creada, en este caso en firebase seria 'productos'.
// 'query' y 'where' para realizar consultas y filtrar.
import { getDocs, collection, query, where } from "firebase/firestore"

import { db } from '../../services/config'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { id } = useParams();

  const [categoria, setCategoria] = useState(null)

  useEffect(() => {

    // Obtener la colección "productos"
    const productos = id ? 
      query(collection(db, "productos"),where("idCat", "==", id)) : 
        collection(db, "productos")

    // Obtener los documentos y mapearlos
    getDocs(productos)
      .then(response => {
        // Extraer los datos de cada documento usando la función map()
        const productosData = response.docs.map(doc => (
            {id:doc.id, ...doc.data()})
          );
          
        // Ahora la variable productosData contendrá un array con los datos de cada documento de la colección "productos"
        setProductos(productosData);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
 
  },[id])

  return (
    <div className='container'>
        <h2 className='products__title'>{id ? categorias[id] : 'Home'}</h2>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer