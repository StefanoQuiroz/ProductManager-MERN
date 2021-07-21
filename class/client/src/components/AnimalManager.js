import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm';
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AnimalManager = () => {

    const {path, url} = useRouteMatch();

    const [datos, setDatos] = useState([]);

    const [actualizar, setActualizar] = useState(false);

    useEffect(() => {
        axios.get("/api/animales")
        .then(response => setDatos(response.data.data))
        .catch(err => Swal.fire({
            icon: 'error',
            title: 'Error al obtener los datos',
            text: 'Ocurrió un problema al intentar obtener el listado de animales'
        }));
    }, [actualizar])

     return (
        <Row>
            <Router>
                <Switch>
                    <Route path={`${path}/crear`}>
                        <AnimalForm crear={true}  datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={`${path}/ver/:id`}>
                        <AnimalForm ver={true}/>
                    </Route>
                    <Route path={`${path}/modificar/:id`} >
                        <AnimalForm modificar={true} datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={path}>
                        <AnimalList datos={datos} setDatos={setDatos} actualizar={actualizar} setActualizar={setActualizar}/>
                    </Route>
                </Switch>
            </Router>
        </Row>
    );
}

export default AnimalManager;
