import React, { useState } from 'react';
import styled from 'styled-components';
import AtendimentoList from '../components/atendimento/AtendimentoList'; // 


// Paleta de cores (para consistência com as outras páginas)
const colors = {
  primaryBlue: '#3498db', // Azul vibrante
  secondaryOrange: '#e67e22', // Laranja energético
  lightBlue: '#81d4fa', // Azul mais claro
  darkGray: '#333',
  mediumGray: '#555',
  lightGrayBg: '#f0f2f5',
  successGreen: '#2ecc71',
  errorRed: '#e74c3c',
  neutralGray: '#95a5a6', // Um cinza neutro para ações secundárias
  infoBlue: '#3498db', // Azul para informações
};

const PageWrapper = styled.div`
  padding: 40px;
  background-color: white; /* Fundo branco como solicitado */
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

function QueuePage() {

  return (
    <PageWrapper>
      <Header>
        <Title>Fila de Atendimento</Title>
      </Header>

      <AtendimentoList></AtendimentoList>
    </PageWrapper>
  );
}

export default QueuePage;