/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => {
    const num = parseInt(Math.random() * (props.max - props.min) + props.min)
    return(
        <div>
            <h2>Número aleatório entre {props.min} e {props.max}  escolhido foi {num} </h2>
        </div>
    )
}