import React from 'react'

export const CompA = props =>
    <h1>Primero diz: {props.valor}</h1>

export const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>


// só se pode exportar 1 default.
// export default function(){
//     return <p>teste</p>
// }

// export {CompA, CompB}