import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

/**Styles */
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select= styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;
/** */


//un hook es basicamente una funcion
const useMoneda = (label, stateInicial, opciones) => {

    //state de el custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">- Seleccione -</option>
                {opciones.map(opcion => (
                     <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    //retornar state, interfaz y funcion que modifica al state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;

/*
    const [state, actualizarState] = useState();
    lo que esta dentro de los corchetes es lo que devuelve state
*/