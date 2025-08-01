import React from 'react';
import styled from 'styled-components';

const urgencyColors = {
  0: '#2ecc71',  // Baixa - Verde
  1: '#f1c40f',  // Média - Amarelo
  2: '#e67e22',  // Alta - Laranja
  3: '#e74c3c',  // Urgente - Vermelho
};


const Card = styled.div`
  background-color: white;
  border-left: 10px solid ${({ $urgency }) => urgencyColors[$urgency] || '#bdc3c7'};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div``;

const AnimalName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #3498db;
`;

const Detail = styled.p`

  font-size: 1rem;
  color: #555;
`;

const Urgency = styled.span`
  font-weight: bold;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ urgency }) => urgencyColors[urgency] || '#95a5a6'};
`;

const DateLabel = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
  color: #888;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 1rem; 
  border: none;
  border-radius: 6px;
  padding: 10px 30px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const AtendimentoCard = ({ animal, atendimento, onRegistrar }) => {
  const  urgency  = atendimento.urgency;
  
  return (
    <Card $urgency={urgency}>
      <Info>
        <AnimalName>{animal.name}</AnimalName>
        <Detail><strong>Espécie:</strong> {animal.species}</Detail>
        <Detail><strong>Peso:</strong> {animal.weight} kg</Detail>
        {/* <DateLabel>Agendado para: {new Date(date).toLocaleString('pt-BR')}</DateLabel> */}
        <Urgency urgency={urgency}>
          {['Baixa', 'Média', 'Alta', 'Urgente'][urgency] || 'Desconhecida'}
        </Urgency>
      </Info>

      <Button onClick={() => onRegistrar(atendimento._id)}>
        Registrar <br />Atendimento
      </Button>
    </Card>
  );
};

export default AtendimentoCard;
