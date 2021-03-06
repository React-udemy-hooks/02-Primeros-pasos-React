# 02-Primeros-pasos-React

0. [¿Qué es un componente React?](#schema0)
1. [Primera aplicación en React](#schema1)
1. [Nuestro Primer Componente](schema2)
1. [Fragment `<></>`](#schema3)
1. [Impresión de variables en el HTML](#schema4)
1. [Comunicación entre componentes, props](#schema5)
1. [PropsTypes](#schema6)
1. [DefaultProps](#schema7)
1. [Evento click (Eventos en general)](#schema8)
1. [useState](#schema9)
1. [handleSubtract y handleReset](#schema10)

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
<hr>

<a name="schema3"></a>

# 3 Fragment `<></>`
- Con div
~~~js
import React from "react";

const PrimeraApp = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Mi primera aplicación</p>
    </div>
  )
}

export default PrimeraApp
~~~
- Con Fragment
~~~js
import React, { Fragment } from "react";

const PrimeraApp = () => {
  return (
    <Fragment>
      <h1>Hola Mundo</h1>
      <p>Mi primera aplicación</p>
    </Fragment>
  )
}

export default PrimeraApp
~~~
- Mejor opción, fragment si importar el Fragment
~~~js
import React from "react";

const PrimeraApp = () => {
  return (
    <>
      <h1>Hola Mundo</h1>
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp
~~~

<hr>

<a name="schema4"></a>

# 4 Impresión de variables en el HTML
Vale para strings, números, arrays, pero para objectos no
~~~js
import React from "react";

const PrimeraApp = () => {
  const saludo = 'Hola mundo const'
  return (
    <>
      <h1>{ saludo }</h1>
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp
~~~
- Para objectos:
~~~js
import React from "react";

const PrimeraApp = () => {
  const saludoObjet = {
    nombre: 'Patricia',
    edad: 100
  } 
  const saludo = 'Hola Mundo'
  return (
    <>
      <h1>{ saludo }</h1>
      <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre>
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp
~~~


<hr>

<a name="schema5"></a>

# 5 Comunicación entre componentes, props
Las props se heredan de padres a hijos.

- `index.js`
~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp'
import './index.css'


const divRoot = document.querySelector('#root')

ReactDOM.render(<PrimeraApp saludo = 'Hola, soy un saludo'/>, divRoot)
~~~
- `PrimeraApp.js`
~~~js
import React from "react";

const PrimeraApp = (props) => {
  console.log(props)
    return (
    <>
      <h1>{ props.saludo }</h1>
      {/* <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp
~~~
- Mejor es usar una destructuración de props en `PrimeraApp.js`
~~~js
const PrimeraApp = ({ saludo } ) => {
    return (
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp
~~~
- Se puede poner una valor por defecto a la variable.
~~~js
const PrimeraApp = ({ saludo = 'Hola mundo' }) => {
~~~

<hr>

<a name="schema6"></a>

# 6 PropsTypes
Cuando un componente necesita una prop de padres debemos pasar un valor, hay que obligar a que nos pasen ese valor por las `PropsTypes`
- `PrimeraApp.js`
~~~js
import React from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo }) => {
  

    return (
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp
~~~
<hr>

<a name="schema7"></a>

# 7 DefaultProps
- Valores por defecto, en `PrimeraApp.js`
~~~js
PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtítulo'
}

~~~
<hr>

<a name="schema8"></a>

# 8  Evento click (Eventos en general)

doc: https://es.reactjs.org/docs/events.html
- Ejemplo de Evento: `onClick` en `CounterApp.js`
~~~js
const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={ (e)=>{console.log(e)} } > +1</button>
    </>
  );
};
~~~
- Creando una función para el onClick,
~~~js
const CounterApp = ({ value }) => {
  
  const handleAdd = (e) => {
    console.log(e)
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={(e)=> handleAdd(e) } > +1</button>
    </>
  );
};
~~~
Como en la arrow function el primer argumento es enviado como primer argumento de la función que está dentro, por consecuencia podemos cambiar y dejarlo así
~~~js
const CounterApp = ({ value }) => {
  
  const handleAdd = (e) => {
    console.log(e)
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={ handleAdd } > +1</button>
    </>
  );
};
~~~
- Si queremos poner unos paréntesis en la función `handleAdd` en dicha función debe tener una función de retorno
~~~js
const CounterApp = ({ value }) => {
  
  const handleAdd = (e) => {
    return ()=>{console.log('Hola')}
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={ handleAdd() } > +1</button>
    </>
  );
};
~~~

Se puede hacer de las dos maneras. Con y sin paréntesis.

<hr>

<a name="schema9"></a>

# 9 useState
- Importar el `useState`
~~~js
import React,{ useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  
  const [ counter, setCounter ] = useState(0);

  const handleAdd = (e) => {
   setCounter(counter + 1)
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={ handleAdd } > +1</button>
    </>
  );
};
~~~
- Otra manera:
~~~js
 const handleAdd = (e) => {
    // setCounter(counter + 1)
    setCounter((c)=> c + 1)
  }
~~~

<hr>

<a name="schema10"></a>

# 10 handleSubtract y handleReset

~~~js
const CounterApp = ({ value }) => {
  
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (e) => {
    // setCounter(counter + 1)
    setCounter((c)=> c + 1)
  }
  const handleSub = () => {
    setCounter((c) => c - 1);
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}> +1</button>
      <button onClick={ ()=>setCounter(value) }> Reset</button>
      <button onClick={handleSub}> -1</button>
    </>
  );
};
~~~