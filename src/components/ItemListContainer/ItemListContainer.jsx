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
    const productos = collection(db, "productos");

    // Obtener los documentos y mapearlos
    getDocs(productos)
      .then(response => {
        // Extraer los datos de cada documento usando la función map()
        const productosData = response.docs.map(doc => doc.data());

        // Ahora la variable productosData contendrá un array con los datos de cada documento de la colección "productos"
        // Haz lo que necesites con este array, por ejemplo, puedes guardarlo en el estado "productos" usando setProductos(productosData)
        setProductos(productosData);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
      });
 
  },[])

  return (
    <div className='container'>
        <h2 className='products__title'>Mis productos</h2>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer