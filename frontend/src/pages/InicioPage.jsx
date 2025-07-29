import React from 'react';
import styled from 'styled-components';

// Importe sua imagem da logo
import SmartPetLogo from '../imgs/gato.png'; // Ajuste o caminho se sua logo estiver em outro lugar

// Paleta de cores (para consistência)
const colors = {
  primaryBlue: '#3498db', // Azul vibrante
  secondaryOrange: '#e67e22', // Laranja energético
  darkGray: '#333',
  mediumGray: '#555',
  lightGrayBg: '#f0f2f5', // Um cinza bem claro para fundos secundários
};

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
`;

const ContentContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
`;

const LogoContainer = styled.div`
  animation: fadeIn 1s ease-out; /* Animação de fade-in */

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const WelcomeTitle = styled.h1`
  margin: 20px 0;
  font-size: 4.5rem; /* Título bem grande */
  color: ${colors.primaryBlue};
  letter-spacing: 2px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  animation: slideInLeft 1s ease-out forwards; /* Animação de deslize da esquerda */
  opacity: 0; /* Começa invisível para a animação */

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const WelcomeText = styled.p`
  font-size: 1.5rem;
  color: ${colors.mediumGray};
  line-height: 1.6;
  max-width: 700px;
  animation: fadeIn 1.5s ease-out 0.5s forwards; /* Animação de fade-in com delay */
  opacity: 0; /* Começa invisível para a animação */
`;

const CallToAction = styled.a`
  background-color: ${colors.secondaryOrange};
  color: white;
  margin:10px;
  padding: 18px 40px;
  border-radius: 30px; /* Botão em formato de pílula */
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #d35400; /* Laranja mais escuro no hover */
    transform: translateY(-3px); /* Efeito de levantar */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  animation: fadeIn 1.5s ease-out 1s forwards; /* Animação de fade-in com delay maior */
  opacity: 0; /* Começa invisível para a animação */
`;

function HomePage() {
  return (
    <HomePageWrapper>
      
      <ContentContainer>
        <LogoContainer>
        <LogoImage src={SmartPetLogo} alt="SmartPet Logo" />
      </LogoContainer>
      <WelcomeTitle>Bem-vindo ao SmartVet!</WelcomeTitle>
      <WelcomeText>
        Sua plataforma completa para gerenciar atendimentos veterinários.
        Simplifique o cadastro dos animais e organize
        sua fila de atendimento com facilidade.
      </WelcomeText>
      <CallToAction href="/animais">Começar Agora</CallToAction>
      </ContentContainer>
      
    </HomePageWrapper>
  );
}

export default HomePage;