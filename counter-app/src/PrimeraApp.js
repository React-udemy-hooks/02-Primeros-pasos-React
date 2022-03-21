import React from "react";

const PrimeraApp = ({ saludo = 'Hola mundo' }) => {
  

    return (
    <>
      <h1>{ saludo }</h1>
      {/* <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp