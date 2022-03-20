# 02-Primeros-pasos-React

0. [¿Qué es un componente React?](#schema0)
1. [Primera aplicación en React](#schema1)
1. [2 Nuestro Primer Componente](schema2)


Exposiciones sobre los componentes

Creación de componentes (Functional Components)

Propiedades - Props

Impresiones en el HTML

PropTypes

DefaultProps

Introducción general a los Hooks

useState



<hr>

<a name="schema0"></a>

# 0 ¿Qué es un componente React?
Pequeña pieza de código encapsulado re-utilizable que puede tener o no estado

<hr>

<a name="schema1"></a>

# 1 Primera aplicación en React

Vamos a crear una app con este comando de react

Doc: https://create-react-app.dev/
~~~bash
npx create-react-app counter-app
~~~

Y cuando esté todo instalado navegamos a la carpeta que se no ha creado con el nombre de la app y ejecutamos:
~~~
npm start
~~~

Se nos abre nuestra primer app de react.
Y borramos todos los archivos que estan en la carpeta `scr` y creamos nuestros archivo `index.js` donde se va anidar todo la app de react.

~~~js
import React from 'react'
import ReactDOM from 'react-dom'


const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#root')

ReactDOM.render( saludo,divRoot )
~~~
<hr>

<a name="schema2"></a>

# 2 Nuestro Primer Componente
El nombre de los componentes se escriben en mayúsculas `PrimeraApp.js`

Funcional components:
- `PrimeraApp.js`
~~~jsx
import React from "react";

const PrimeraApp = () => {
  return <h1>Hola Mundo</h1>;
}

export default PrimeraApp
~~~
- `index.js`
~~~jsx
import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp'
import './index.css'


const divRoot = document.querySelector('#root')

ReactDOM.render(<PrimeraApp />, divRoot)
~~~
- Algo de estilos en el  `index.css`, añadimos en el archivo `index.js` el import del archivo css.

~~~css
html,body{
  color: white;
  background-color: aquamarine;
  font-family: "Helvetica Neue",Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  padding: 50px;
}
~~~