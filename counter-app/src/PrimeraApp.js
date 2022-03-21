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
      {/* <pre>{JSON.stringify(saludoObject, null, 3 ) }</pre> */}
      <p>Mi primera aplicación</p>
    </>
  )
}

export default PrimeraApp