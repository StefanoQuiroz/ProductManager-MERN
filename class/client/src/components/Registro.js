import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
const Registro = (props) => {
    const useNombre = useRef();
    const useApellido = useRef();
    const useEmail = useRef();
    const usePassword = useRef();
    const useConfPassword = useRef();
    const {registro, setRegistro} = props
    const history = useHistory();
    const [input, setInput] = useState({
        nombre:"",
        apellido: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const login = (event) => {
        history.push("/");
    }

    const onChange = (event) => {
        const {name, value} = event.target;
        setInput({
            ...input,
            [name]:value
        })
    }

    const crearUsuario = (event) => {
        axios.post(`http://localhost:8000/api/usuarios/new`, input)
            .then(response => {
                if(response.data && response.data.data){
                    setRegistro(registro.concat([response.data.data]));
                    //datos.concat([response.data.data])
                    login(event);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error al registrarse",
                        text: response.data.error.message
                    })
                }
            })

            .catch (err => Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un problema al crear un nuevo usuario'
            }) )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        crearUsuario(event)
    }

    return (
        <Col md={6}>
            <Form onSubmit={onSubmit}>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="nombre">Nombre del Usuario</Label>
                        <Input ref={useNombre} type="text" name="nombre" id="nombre" value={input.nombre} onChange={onChange}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="apellido">Apellido del Usuario</Label>
                        <Input ref={useApellido} type="text" name="apellido" id="apellido" value={input.apellido} onChange={onChange}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email del Usuario</Label>
                        <Input ref={useEmail} type="email" name="email" id="email" value={input.email} onChange={onChange}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="passoword">Password</Label>
                        <Input ref={usePassword} type="password" name="password" id="password" value={input.password} onChange={onChange}/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="confPassword">Confirm Password</Label>
                        <Input ref={useConfPassword} type="password" name="confirmPassword" id="confPassword" value={input.confirmPassword} onChange={onChange}/>
                    </FormGroup>
                </Col>
                </Row>             
                <Row form>
                    <Col>
                        <Button style={{margin:'2px'}} type="submit">Enviar</Button>
                    </Col>
                </Row>             
            </Form>
        </Col>
    );
}

export default Registro;
