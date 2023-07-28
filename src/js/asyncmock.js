const productos = [
  {
    "id": "1",
    "nombre": "Buzo Bappe Baby Milo Negro",
    "precio": 1000.00,
    "imagen": "../src/assets/stock/8.jpg",
    "stock": 10,
    "idCategoria": "3"
  },
  {
    "id": "2",
    "nombre": "Camisa LV Blanca",
    "precio": 1000.00,
    "imagen": "../src/assets/stock/2.jpg",
    "stock": 1,
    "idCategoria": "2"
  },
  {
    "id": "3",
    "nombre": "Camisa LV Azul",
    "precio": 1000.00,
    "imagen": "../src/assets/stock/3.jpg",
    "stock": 5,
    "idCategoria": "2"
  },
  {
    "id": "4",
    "nombre": "Chomba Polo Azul",
    "precio": 1000.00,
    "imagen": "../src/assets/stock/4.jpg",
    "stock": 2,
    "idCategoria": "1"
  },
  {
    "id": "5",
    "nombre": "Chomba Polo Negra",
    "precio": 1000.00,
    "imagen": "../src/assets/stock/5.jpg",
    "stock": 7,
    "idCategoria": "1"
  },
  {
    "id": "6",
    "nombre": "Chomba Polo Roja",
    "precio": 1000.00,
    "imagen": "../src/assets/stock/6.jpg",
    "stock": 5,
    "idCategoria": "1"
  }
]

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos)
    }, 0)
  })
}

export const getProducto = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      const producto = productos.find(producto => producto.id === id)
      resolve(producto)
    }, 0)
  })
}

export const getProductosPorCategoria = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      const prods = productos.filter(producto => producto.idCategoria === id)
      resolve(prods)
    }, 0)
  })
}