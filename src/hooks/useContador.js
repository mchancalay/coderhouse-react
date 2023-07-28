import { useState } from "react"

export const useContador = (min, max) => {
    const [contador, SetContador] = useState(min);

    const incrementar = () => contador < max && SetContador(contador + 1)
    const decrementar = () => contador > min && SetContador(contador - 1)
    return {contador, incrementar, decrementar}
}