import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AnimalList from './AnimalList';
import { Row } from 'reactstrap';

const AnimalManager = () => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/animales")
        .then(response => setDatos(response.data.data))
        .catch(err => Swal.fire({
            icon: 'error',
            title: 'Error al obtener los datos',
            text: 'Ocurrió un problema al ntentar obtener el listado de animales'
        }));
    }, [])

     return (
        <Row>
            <AnimalList animales={datos}/>
        </Row>
    );
}

export default AnimalManager;
