import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import {CompA, CompB} from  './components/2Componentes'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilvia'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
import Contador from   './components/Contador'

const element = document.getElementById('root');
ReactDOM.render(
    <div>
        <Contador numero={2}/>
        {/* <ComponenteClasse valor="Componente de Classe"/> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira Barreto">
            <Membro nome="André" /> */}
            {/* <Membro nome="Mariana" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos /> */}
        {/* <PrimeiroComponente valor="Bom dia"
        exemplo={123}/> */}
        {/* <CompB />
        <CompA />  */}
    </div>
    , element); //Como por exemplo, isso 

