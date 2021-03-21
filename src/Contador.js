import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Contador = ()=>{

    const [contador, setContador] = useState(0)

    return(
        <Fragment>
           <h1>Este es mi contador:</h1>
           <h2>{contador}</h2>
           <button onClick={() => setContador(contador +1) }> Aumentar </button> 
            <button onClick= {() => setContador(contador -1)}> Restar </button>
            <button onClick= {() => setContador(0) }> Reset </button>
            

        </Fragment>
    )

}

Contador.propTypes={
    contador: PropTypes.number.isRequired

}

export default Contador
