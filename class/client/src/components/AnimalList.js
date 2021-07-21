import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Table, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPen, faBone, faSignOutAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import axios from 'axios';

const AnimalList = (props) => {
    const { datos, setDatos, actualizar, setActualizar} = props;
    const history = useHistory()
    const ver = (event, id) => {
        history.push(`/animales/ver/${id}`)
    }

    const modificar = (event, id) => {
        history.push(`/animales/modificar/${id}`);
    }

    const borrar = (event, id) => {
        Swal.fire({
            icon: "warning",
            title: "Eminar animal",
            text: "¿Esta seguro quedesea eliminar el animal?",
            showCancelButton: true
        }).then(result => {
            if(result){
                axios.delete(`/api/animales/delete/${id}`)
                    .then(response => {
                        const deleteData = datos.filter(response => response._id !== id);
                        setDatos(deleteData);
                    })
                    .catch(err => Swal.fire({
                        icon: "error",
                        title: "error",
                        text: "Error al eliminar el animal"
                    }))
            }
        })
    }

    const adoptar = (event, id) => {
        axios.patch(`/api/animales/${id}/propietario`)
            .then(response => {
                if(response.data.error){
                    Swal.fire({
                        icon: "error",
                        title: "Error al adoptar",
                        text: response.data.message
                    })
                } else {
                    setActualizar(!actualizar)
                }
            })
    }
    
    return (
        <Row>
            <Col md={6}>
                <Link to={`/animales/crear`}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Link>
                <Link to={`/`}>
                    <FontAwesomeIcon style={{marginLeft: '15rem'}} icon={faSignOutAlt}/>
                </Link>
            </Col>
            <Table>
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Color</th>
                        <th>Tamaño</th>
                        <th>Propietario</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {datos && datos.map((items, index) => (
                        <tr key={index}>
                            <td>
                                <Button color="primary" style={{margin:'2px'}} onClick={(event) => ver(event, items._id)}><FontAwesomeIcon icon={faEye}/> Ver</Button>
                                <Button color="secondary" style={{margin:'2px'}} onClick={(event) => modificar(event, items._id)}><FontAwesomeIcon icon={faPen}/> Editar</Button>
                                <Button color="danger" style={{margin:'2px'}} onClick={(event) => borrar(event, items._id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                <Button color="success" style={{margin:'2px'}} onClick={(event) => adoptar(event, items._id)}><FontAwesomeIcon icon={faBone}/></Button>
                            </td>
                            <td>{items.nombre}</td>
                            <td>{items.tipo}</td>
                            <td>{items.color}</td>
                            <td>{items.tamanho}</td>
                            <td>{items.propietario.length>0?items.propietario[0].nombre:''}</td>
                            <td>{items.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>            
        </Row>
    );
}

export default AnimalList;
