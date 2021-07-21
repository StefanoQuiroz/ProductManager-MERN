import React, { useEffect, useState } from 'react';
import './App.css';
import AnimalManager from './components/AnimalManager';
import { Container } from 'reactstrap';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Registro from './components/Registro';

function App() {
  const [register, setRegister] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:8000/api/usuarios")
      .then(response => setRegister(response.data.data))
      .catch(err => Swal.fire({
        icon: "error",
        title: "Error en datos del Usuario",
        text: "Ocurrio un error al cargar los datos del usuario"
      }))
  }, [])
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path={`/`}>
              <Login/>
              <Registro registro={register} setRegistro={setRegister}/>
          </Route>
          <Route path={`/animales`}>
            <AnimalManager/>
          </Route>
        </Switch>  
      </Router>
    </Container>
  );
}

export default App;
