import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import AnimalList from './AnimalList';
import AnimalForm from './AnimalForm';
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
            <Link to={`/crear`}>
                <FontAwesomeIcon icon={faPlus}/>
            </Link>
                <Switch>
                    <Route path={`/crear`}>
                        <AnimalForm crear={true}  datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={`/ver/:id`}>
                        <AnimalForm ver={true}/>
                    </Route>
                    <Route path={`/modificar/:id`} >
                        <AnimalForm modificar={true} datos={datos} setDatos={setDatos}/>
                    </Route>
                    <Route path={`/`}>
                        <AnimalList datos={datos} setDatos={setDatos}/>
                    </Route>
                </Switch>
            </Router>
        </Row>
    );
}

export default AnimalManager;
