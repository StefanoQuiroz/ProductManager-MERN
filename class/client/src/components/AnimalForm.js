import React, { useEffect, useRef, useState } from 'react';
import { Container, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory, useParams } from 'react-router-dom';


const AnimalForm = (props) => {
    const history = useHistory();
    const {ver, crear, modificar } = props;
    const useNombre = useRef(null);
    const useTipo = useRef(null);
    const useColor = useRef(null);
    const useTamanho = useRef(null);
    const {id} = useParams();
    
    const [input, setInput] = useState({
        nombre:"",
        tipo: "",
        color: "",
        tamanho: ""
    });
       
    const [tipo, setTipo] = useState([]);
    
    const {datos, setDatos} = props

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
                .then(response => setInput(response.data.data))
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

    const editar = (event) => {
        axios.put(`http://localhost:8000/api/animales/update/${id}`, input)
            .then(response => {
                const index = datos.findIndex( res => res._id === id);
                datos.splice(index, 1, input);//primero agrega
                setDatos(datos); // luego modifica
                volver(event) // luego presenta

            })
            .catch(err => Swal.fire({
                icon: 'error',
                title:'Error',
                text:'Ha ocurrido un problema al actualizar los datos del animal'
            }))
    }

    const crearAnimal = (event) => {
        axios.post("http://localhost:8000/api/animales/new", input)
            .then(response => {
                if(response.data.data){
                    volver(event);
                    setDatos(datos.concat([response.data.data]));
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error al crear los datos",
                        text: response.data.error.message
                    })
                }
            })
            .catch (err => Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un problema al crear un nuevo animal usuario'
            }) )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(id){
            editar();
        } else{
            crearAnimal();
        }
        useNombre.current.value="";
        useTipo.current.value="";
        useColor.current.value="";
        useTamanho.current.value="";
    }


    return (
        <Container>
            <Row>
                <h1>{ver ? `Ver ${input.nombre}` : (modificar ? `Editar ${input.nombre}` : `Nuevo Animal`)}</h1>
            </Row>
            <Form onSubmit={onSubmit}>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="nombre">Nombre del Animal</Label>
                        <Input ref={useNombre} type="text" name="nombre" id="nombre" value={input.nombre} onChange={onChange} disabled={ver}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="tipo">Tipo del Animal</Label>
                        <Input ref={useTipo} type="text" name="tipo" id="tipo" value={input.tipo} onChange={onChange} disabled={ver}/>
                        {/* <Input ref={useTipo} type="select" name="tipo" id="tipo" value={input.tipo} onChange={onChange} disabled={ver}>
                            {tipo && tipo.map((options, index)=>(
                            <option key={index} value={options.tipo}>
                                {options.tipo}
                            </option>))}
                        </Input> */}
                    </FormGroup>
                </Col>
                </Row>             
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="color">Color del Animal</Label>
                        <Input ref={useColor} type="text" name="color" id="color" value={input.color} onChange={onChange} disabled={ver}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="tam">Tamaño del Animal</Label>
                        <Input ref={useTamanho} type="select" name="tamanho" id="tam" value={input.tamanho} onChange={onChange} disabled={ver}>
                            <option>Seleccione</option>
                            <option value="Pequeho">Pequeño</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Grande">Grande</option>
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
