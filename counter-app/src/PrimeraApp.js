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