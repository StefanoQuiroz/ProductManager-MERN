import React from 'react';
import './App.css';
import AnimalManager from './components/AnimalManager';
import { Container } from 'reactstrap';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <Login/>
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
