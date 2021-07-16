import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory, useParams } from 'react-router-dom';


const AnimalForm = (props) => {
    const history = useHistory();
    const {ver, crear, modificar, cerrar} = props;

    const {id} = useParams();
    
    const [input, setInput] = useState({
        nombre:"",
        tipo: "",
        color: "",
        tamanho: ""
    });
    
    const [animal, setAnimal] = useState({});
    
    const [tipo, setTipo] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/animales")
            .then(response => setTipo(response.data.data))
            .catch(err => Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encuentra el tipo de animal requerido!'
            }))
        
        if(id){
            axios.get(`http://localhost:8000/api/animales/${id}`)
                .then(response => setAnimal(response.data.data))
                .catch(err => Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `No se encuentra el tipo de animal con el id: ${id} requerido`
                }))
        }
    },[id])

    const volver = (event) => {
        history.push(`/`);
    }

    const onChange = (event) => {
        const {name, value} = event.target;
        setInput({
            ...input,
            [name] : value
        })
    }

    /* const editar = () => {

    }

    const crear = () => {

    } */

    const onSubmit = (event) => {
        event.preventDefault();
        /* if(id){
            editar();
        } else{
            crear();
        } */
        //console.log(input)
    }


    return (
        <Container>
            <Row>
                <h1>{ver ? `Ver ${animal.nombre}` : (modificar ? `Editar ${animal.nombre}` : `Nuevo Animal`)}</h1>
            </Row>
            <Form onSubmit={onSubmit}>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="nombre">Nombre del Animal</Label>
                        <Input type="text" name="nombre" id="nombre" value={animal.nombre} onChange={onChange}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="tipo">Tipo del Animal</Label>
                        <Input type="select" name="tipo" id="tipo" value={animal.tipo} onChange={onChange}>
                            {tipo && tipo.map((options, index)=>(
                            <option key={index} value={options._id}>
                                {options.tipo}
                            </option>))}
                        </Input>
                    </FormGroup>
                </Col>
                </Row>             
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="color">Color del Animal</Label>
                        <Input type="text" name="color" id="color" value={animal.color} onChange={onChange}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="tam">Tamaño del Animal</Label>
                        <Input type="select" name="tamanho" id="tam" value={animal.tamanho} onChange={onChange}>
                            <option>Seleccione</option>
                            <option value="pequeho">Pequeño</option>
                            <option value="mediano">Mediano</option>
                            <option value="grande">Grande</option>
                        </Input>
                    </FormGroup>
                </Col>
                </Row>
                <Row form>
                    <Col>
                        { crear && <Button style={{margin:'2px'}} type="submit">Crear</Button>}
                        { modificar && <Button style={{margin:'2px'}} type="submit">Modificar</Button>}
                        <Button style={{margin:'2px'}} type="button" onClick={(event) => volver(event)}>Home</Button>
                    </Col>
                </Row>             
            </Form>
        </Container>
    );
}

export default AnimalForm;
