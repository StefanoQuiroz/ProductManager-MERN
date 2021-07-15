import React from 'react';
import './App.css';
import AnimalManager from './components/AnimalManager';
import { Container } from 'reactstrap';
import AnimalForm from './components/AnimalForm';

function App() {
  return (
    <Container>
      <AnimalManager/>
      <AnimalForm/>
    </Container>
  );
}

export default App;
