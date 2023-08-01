// Firebase es un conjunto de servicios en el que se incluye el store que es para crear bases de datos dinamicas.

// Vamos a importar estas dos funciones de la libreria Firebase.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// initializeApp = esta funcion la utilizo para INICIAR LA CONEXION CON FIREBASE.
// getFirestore = se utiliza para obtener una instancia de Firestore.

// Objeto con toda la info de la cuenta. Se incluye la key personal de acceso a la bd.
const firebaseConfig = {
  apiKey: "AIzaSyDWIDQR-_4NmvBggHbxxssUtyMzAJ9oipQ",
  authDomain: "mapple-52892.firebaseapp.com",
  projectId: "mapple-52892",
  storageBucket: "mapple-52892.appspot.com",
  messagingSenderId: "167482972106",
  appId: "1:167482972106:web:94ded7b103a935d79a6133"
};

// Inicializamos Firebase y se pasa la configuracion como se argumento. Esto devuelve una instancia de Firebase.
const app = initializeApp(firebaseConfig);

// Exportamos esta referencia para que este disponible en toda la app.
export const db = getFirestore(app)
