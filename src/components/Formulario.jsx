import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled';

import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

//styled
const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;
//styled*

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    const [listacripto, guardarListacripto] = useState([]);
    const [error, guardarError]=useState(false);

    const MONEDAS = [ 
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'JPY', nombre: 'Yen Japones'}
    ]

    const [moneda, SelectMoneda] = useMoneda('Elige tu moneda', '',MONEDAS);

    //utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu criptomoneda', '', listacripto)

    //ejecutar llamado a la funcion
    useEffect(()=>{
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            guardarListacripto(resultado.data.Data);
        }
        consultarAPI(); 
    }, [])

    const cotizarMoneda = e => {
        e.preventDefault();

        //validar si el formulario
        if(moneda === '' || criptomoneda === ''){
            guardarError(true);
            return;
        }

        //pasar datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }


    return ( 

        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            {/* custom hooks */}
            <SelectMoneda />
            <SelectCripto />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;