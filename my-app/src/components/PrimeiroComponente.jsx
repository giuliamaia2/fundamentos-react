import React from 'react' //porque se tem JSX no código

//Componente baseado em função
export default (props) =>
    <div>
        {/* as chaves representam um trecho de código em js */}
        <h1>{props.valor}</h1>
        <h2>{1 + 2}</h2>
        <p>{true ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p> 
    </div>


// export default () =>
//     <div>
//         <h1>Primeiro Componente</h1>
//     </div>


// export default function() {
//     return <h1>Primeiro Componente</h1> //trecho jsx pode virar variável, no react vira um pedaço de javascript
// }
