import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// Importe sua imagem da logo
import SmartPetLogo from '../imgs/logo.png'; // Ajuste o caminho conforme onde sua imagem estiver

// Paleta de cores para consistência
const colors = {
  primaryBlue: '#3498db', // Azul vibrante
  secondaryOrange: '#e67e22', // Laranja energético (usado para destaque, se necessário)
  lightBlue: '#81d4fa', // Azul mais claro
  darkGray: '#333',
  mediumGray: '#555',
  lightGrayBg: '#f0f4f8', // Fundo claro da página (usado para elementos claros)
  buttonHoverBlue: '#2980b9', // Azul mais escuro para hover
  // Novas cores para um visual moderno na navbar
  navBgGradientStart: '#2c3e50', // Azul escuro suave
  navBgGradientEnd: '#34495e',   // Um pouco mais claro que o início
  navLinkHoverBg: 'rgba(52, 152, 219, 0.2)', // primaryBlue com transparência
  navLinkActiveBg: 'rgba(2, 113, 164, 0.3)', // Uma cor mais escura e transparente para ativo
  navLinkColor: '#ecf0f1', // Quase branco para texto padrão
  navLinkActiveColor: '#81d4fa', // lightBlue para texto ativo
};


const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  background: linear-gradient(to bottom, ${colors.navBgGradientStart}, ${colors.navBgGradientEnd}); /* Gradiente azul escuro */
  border-right: none; /* Remove a borda lateral */
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.25); /* Sombra mais pronunciada e moderna */
  z-index: 1000; /* Garante que fique acima de outros elementos */
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px; /* Mais espaço para a logo se destacar */
  padding: 15px; /* Mais padding */
  background-color: ${colors.lightGrayBg}; /* Fundo claro para a logo */
  border-radius: 15px; /* Arredondamento suave */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Sombra mais forte e elegante */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Borda sutil */
`;

const LogoImage = styled.img`
  width: 160px; /* Ajuste o tamanho da logo para um pouco maior */
  height: auto;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1)); /* Sombra para a imagem da logo */
`;

const NavButton = styled(Link)`
  display: flex; /* Para alinhar ícones e texto futuramente */
  align-items: center;
  width: 80%;
  padding: 18px 25px; /* Mais padding para maior área de clique */
  margin-bottom: 12px; /* Espaço entre os botões */
  background-color: ${props => props.active ? colors.navLinkActiveBg : 'transparent'}; /* Fundo transparente ou ativo */
  color: ${props => props.active ? colors.navLinkActiveColor : colors.navLinkColor}; /* Cores de texto modernas */
  text-decoration: none;
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif; /* Fonte moderna */
  border: none;
  border-radius: 12px; /* Cantos mais arredondados */
  font-size: 1.15rem; /* Fonte ligeiramente maior */
  font-weight: ${props => props.active ? '700' : '600'}; /* Negrito para ativo */
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Transições mais suaves */
  box-shadow: ${props => props.active ? '0 6px 15px rgba(0, 0, 0, 0.3)' : 'none'}; /* Sombra para o ativo */
  position: relative; /* Para o indicador de ativo */
  overflow: hidden; /* Garante que o hover não vaze */

  /* Linha indicadora de ativo */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(${props => props.active ? '1' : '0'});
    width: 6px; /* Largura da linha */
    height: 80%; /* Altura da linha */
    background-color: ${colors.lightBlue}; /* Cor da linha */
    border-radius: 0 3px 3px 0;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${colors.navLinkHoverBg};
    color: ${colors.navLinkActiveColor}; /* Mesma cor do ativo para hover */
    transform: translateY(-3px); /* Efeito de levantar */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombra sutil no hover */
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

function Navbar() {
  // Hook para obter a localização atual
  const location = useLocation();

  return (
    <NavContainer>
      <LogoContainer>
        <LogoImage src={SmartPetLogo} alt="SmartPet Logo" />
      </LogoContainer>

      <NavButton to="/home" active={location.pathname === '/home'}>
        Início
      </NavButton>

      <NavButton to="/fila-atendimento" active={location.pathname === '/fila-atendimento'}>
        Fila de Atendimento
      </NavButton>
      
      <NavButton to="/animais" active={location.pathname === '/animais'}>
        Animais
      </NavButton>
    
      {/* Você pode adicionar mais botões aqui, seguindo o mesmo padrão */}

    </NavContainer>
  );
}

export default Navbar;