import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm';
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';

const AnimalManager = () => {

    //const {path, url} = useRouteMatch();

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
            <Router>
                <Switch>
                    <Route path={`/crear`}>
                        <AnimalForm crear={true}/>
                    </Route>
                    <Route path={`/ver/:id`}>
                        <AnimalForm ver={true}/>
                    </Route>
                    <Route path={`/modificar/:id`} >
                        <AnimalForm modificar={true}/>
                    </Route>
                    <Route path={`/`}>
                        <AnimalList animales={datos}/>
                    </Route>
                </Switch>
            </Router>
        </Row>
    );
}

export default AnimalManager;
