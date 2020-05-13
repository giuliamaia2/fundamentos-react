import React from 'react'
import { filhosProps } from '../utils/utils'

export default props =>
    <div>

        <h1>Família</h1>
        {filhosProps(props)}

        {/* Ele mapeia todos os filhos, e espalha as propriedades pra
        todos os filhos */}
        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, { ...props })
        })} */}

        {/* Esses só funcionam com um elemento */}
        {/* {React.cloneElement(props.children, { ...props })} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children,
             { sobrenome: props.sobrenome })} */}
        {/* {props.children} */}
    </div>