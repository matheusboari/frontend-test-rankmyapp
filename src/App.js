import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, Card, Photo, Name } from './sytles';

export default function App() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    getPersonagens();
  }, []);

  async function getPersonagens() {
    const result = await axios.get('http://localhost:3000/personagens');

    setPersonagens(result.data);
  }

  return (
    <Container>
      { personagens.map(personagem => (
        <Card id={personagem.id}>
          <Photo src={personagem.image} />
          <Name>{personagem.name}</Name>
        </Card>
      )) }
    </Container>
  )
}
