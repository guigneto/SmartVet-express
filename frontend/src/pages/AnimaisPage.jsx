import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnimalList from '../components/animal/AnimalList'; // importação do componente da lista de animais

const colors = {
  primaryBlue: '#3498db',
  secondaryOrange: '#e67e22',
  lightBlue: '#81d4fa',
  lightOrange: '#ffcc80',
  darkGray: '#333',
  lightGray: '#f0f2f5',
  successGreen: '#2ecc71',
  warningYellow: '#f1c40f',
};

const PageWrapper = styled.div`
  padding: 40px;
  background-color:white;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
  font-family: 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${colors.darkGray};
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
`;

function AnimaisPage() {
  
  return (
    <PageWrapper>
      <Header>
        <Title>Animais</Title>
      </Header>
      <AnimalList />
    </PageWrapper>
  );
}

export default AnimaisPage;