import React from 'react';
import { Table, Col } from 'reactstrap';

const AnimalList = (props) => {
    const {animales} = props;
    return (
        <Col>
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
                            <td>&nbsp;</td>
                            <td>{items.nombre}</td>
                            <td>{items.tipo}</td>
                            {/* <td>{items.tipo.codigo}</td> */}
                            <td>{items.color}</td>
                            <td>{items.tamanho}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>            
        </Col>
    );
}

export default AnimalList;
