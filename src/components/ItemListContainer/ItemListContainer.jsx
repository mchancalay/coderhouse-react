import React, { useEffect, useState } from 'react'
import { getProductos, getProductosPorCategoria } from '../../js/asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

// Importamos 'getDocs' para obtener los documentos de una coleccion (coleccion=array, documentos=objetos).
// 'collections' creo una referencias a la coleccion creada, en este caso en firebase seria 'productos'.
// 'query' y 'where' para realizar consultas y filtrar.
import { getDocs, collection, query, where } from "firebase/firestore"

import { db } from '../../services/config'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    // Obtener la colección "productos"
    const productos = query(collection(db, "productos"));
    //const productos = query(collection(db, "productos"),where("precio", "<", 26000));

    // Obtener los documentos y mapearlos
    getDocs(productos)
      .then(response => {
        // Extraer los datos de cada documento usando la función map()
        const productosData = response.docs.map(doc => ({id:doc.id, ...doc.data()}));

        // Ahora la variable productosData contendrá un array con los datos de cada documento de la colección "productos"
        setProductos(productosData);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
 
  },[productos])

  return (
    <div className='container'>
        <h2 className='products__title'>Home</h2>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer