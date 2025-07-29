import React, { useState } from 'react';
// 1. Importe o useNavigate do react-router-dom
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// Certifique-se que o caminho para sua imagem está correto!
import SmartVetGato from '../imgs/gato.png';

// Paleta de cores para consistência
const colors = {
  primaryBlue: '#3498db', // Azul vibrante
  secondaryOrange: '#e67e22', // Laranja energético
  lightBlue: '#81d4fa', // Azul mais claro
  darkGray: '#333',
  mediumGray: '#555',
  lightGrayBg: '#f0f4f8', // Fundo claro da página
  buttonHoverBlue: '#2980b9', // Azul mais escuro para hover
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Usa min-height para garantir que o conteúdo ocupe a tela */
  background-color: ${colors.lightGrayBg};
  font-family: 'Inter', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px; /* Adiciona padding para telas menores */
  box-sizing: border-box;
`;

const LoginWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 20px; /* Arredondamento suave */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* Sombra mais pronunciada e moderna */
  overflow: hidden;
  max-width: 900px; /* Limita a largura total */
  width: 100%; /* Garante que ocupe a largura disponível */

  @media (max-width: 768px) {
    flex-direction: column; /* Em telas menores, painéis ficam um sobre o outro */
    max-width: 450px;
  }
`;

const FormPanel = styled.div`
  flex: 1; /* Ocupa metade do espaço */
  padding: 50px 40px; /* Padding ajustado */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  margin: auto;
  margin-bottom: 40px; /* Mais espaço abaixo do título */
  color: ${colors.darkGray};
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd; /* Borda mais suave */
  border-radius: 10px; /* Cantos arredondados */
  font-size: 1rem;
  color: ${colors.mediumGray};
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05); /* Sombra interna sutil */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primaryBlue}; /* Borda azul no foco */
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2); /* Sombra de foco azul */
  }

  &::placeholder {
    color: #aaa;
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinha "Esqueceu a senha?" à direita */
  align-items: center;
  margin-bottom: 30px;
`;

const StyledLink = styled.a`
  color: ${colors.primaryBlue}; /* Link com cor azul principal */
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s ease, text-decoration 0.2s ease;

  &:hover {
    color: ${colors.buttonHoverBlue};
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 18px; /* Mais padding para o botão */
  background-color: ${colors.secondaryOrange}; /* Laranja vibrante */
  color: white;
  border: none;
  border-radius: 10px; /* Cantos arredondados */
  font-size: 1.25rem; /* Fonte um pouco maior */
  font-weight: 700; /* Mais encorpado */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */

  &:hover {
    background-color: #d35400; /* Laranja mais escuro no hover */
    transform: translateY(-3px); /* Efeito de levantar */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const GraphicPanel = styled.div`
  flex: 1; /* Ocupa metade do espaço */
  background: linear-gradient(to bottom right, ${colors.primaryBlue}, ${colors.lightBlue}); /* Gradiente azul */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Adiciona padding para garantir que a imagem não encoste nas bordas */

  @media (max-width: 768px) {
    min-height: 250px; /* Altura mínima para o painel gráfico em mobile */
  }
`;

const GraphicImage = styled.img`
  max-width: 90%; /* Garante que a imagem se ajuste ao painel */
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2)); /* Sombra forte para destacar a imagem */
`;


// -------------------- COMPONENT --------------------

function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  // 2. Inicialize o hook useNavigate
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 3. Adicione a lógica de autenticação
    if (email === 'admin@email.com' && senha === '@Admin123') {
      // Se as credenciais estiverem corretas, redirecione para a página home
      navigate('/home');
    } else {
      // Caso contrário, exiba uma mensagem de erro
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <PageContainer>
      <LoginWrapper>
        <FormPanel>
          <Title>Bem Vindo!</Title>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required /* Torna o campo obrigatório */
            />
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required /* Torna o campo obrigatório */
            />
            <OptionsWrapper>
              <StyledLink href="#">Esqueceu a senha?</StyledLink>
            </OptionsWrapper>
            {/* O atributo "to" foi removido e o tipo mudou para "submit",
                pois o controle de navegação agora é feito pela função handleLogin */}
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </FormPanel>

        <GraphicPanel>
          <GraphicImage src={SmartVetGato} alt="SmartPet Login Graphic" />
        </GraphicPanel>

      </LoginWrapper>
    </PageContainer>
  );
}

export default LoginPage;