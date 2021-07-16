import React from 'react';
import './App.css';
import AnimalManager from './components/AnimalManager';
import { Container } from 'reactstrap';
import AnimalForm from './components/AnimalForm';

function App() {
  return (
    <Container>
      <AnimalManager/>
    </Container>
  );
}

export default App;
