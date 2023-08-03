import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const {carrito, total, unidades, addProducto, deleteProducto, vaciarCarrito} = useContext(CarritoContext);

    if(carrito.length === 0){
        return (
            <>
                <h2>Tu carrito esta vacio...</h2>
                <Link to={"/"}>Ver productos</Link>
            </>
        )
    }

    return (
        <div>
            { carrito.map((producto, index) => <CartItem key={index} {...producto}></CartItem>) }

            <h3>Total: ${total}</h3>
            <h3>Cantidad total: {unidades} u.</h3>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <br />
            <Link to={"/checkout"}>Finalizar compra</Link>
            <br />
            <Link to={"/"}>o seguir agregando productos</Link>
        </div>
    )




}

export default Cart