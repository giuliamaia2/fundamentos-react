import React from 'react'

//retornando elementos adjacentes
//elementos em formato array
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

// export default props =>
//     <React.fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.fragment>

//solucao 1 mais usada
// export default props =>
// <div>
    //     <h1>Parte 1</h1>
    //     <h2>Parte 2</h2>
// </div> 