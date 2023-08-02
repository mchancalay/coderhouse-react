import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/config'

const ItemDetailCointainer = () => {
    const [producto, setProducto] = useState(null)
    const {id} = useParams();

    useEffect(() => {
      const nuevoDoc = doc(db, "productos", id)

      getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = {id:res.id, ...data}
        setProducto(nuevoProducto);
      }) 
      .catch(e => console.log(e))
    }, [producto])

  return (
    <div>
        <ItemDetail {...producto} />
    </div>
        
  )
}

export default ItemDetailCointainer