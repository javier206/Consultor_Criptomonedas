import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {
    //de esta manera si resultado viene vacio no ejecutara nada
    if(Object.keys(resultado).length === 0) return null; 

    console.log(resultado);

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precío mas alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precío mas bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación Últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>

        </ResultadoDiv>
     );
}
 
Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizacion;