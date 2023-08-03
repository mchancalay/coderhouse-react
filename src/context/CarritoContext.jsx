import { useState, createContext } from 'react'

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    unidades: 0
})

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [unidades, setUnidades] = useState(0);

    const addProducto = (item, unidades) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        if(!productoExistente){
            setCarrito(previo => [...previo, {item, unidades}])
            setTotal(previo => previo + (item.precio * unidades))
            setUnidades(previo => previo + unidades)
        }else{
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, unidades:prod.unidades + unidades}
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setTotal(previo => previo + (item.precio * unidades))
            setUnidades(previo => previo + unidades)
        }
    }

    const deleteProducto = id => {
        const productoParaEliminar = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado)
        setUnidades(prev => prev - productoParaEliminar.unidades)
        setTotal(prev => prev - (productoParaEliminar.item.precio * productoParaEliminar.unidades))
    }

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setUnidades(0)
    }

    return (
        <CarritoContext.Provider value={{carrito, total, unidades, addProducto, deleteProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}