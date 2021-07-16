import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPen} from '@fortawesome/free-solid-svg-icons';

const AnimalList = (props) => {
    const {animales} = props;
    const history = useHistory()
    const ver = (event, id) => {
        history.push(`/ver/${id}`)
    }

    const modificar = (event, id) => {
        history.push(`/modificar/${id}`);
    }
    
    return (
        <Row>
            <Table>
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Color</th>
                        <th>Tamaño</th>
                    </tr>
                </thead>
                <tbody>
                    {animales && animales.map((items, index) => (
                        <tr key={index}>
                            <td>
                                <Button color="primary" style={{margin:'2px'}} onClick={(event) => ver(event, items._id)}><FontAwesomeIcon icon={faEye}/> Ver</Button>
                                <Button color="secondary" style={{margin:'2px'}} onClick={(event) => modificar(event, items._id)}><FontAwesomeIcon icon={faPen}/> Editar</Button>
                            </td>
                            <td>{items.nombre}</td>
                            <td>{items.tipo}</td>
                            <td>{items.color}</td>
                            <td>{items.tamanho}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>            
        </Row>
    );
}

export default AnimalList;
