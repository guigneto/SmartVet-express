import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Fundo escuro semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Garante que fique por cima de outros elementos */
  backdrop-filter: blur(3px); /* Efeito de desfoque no fundo */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px; /* Limita a largura para formulários */
  position: relative;
  animation: scaleIn 0.3s ease-out; /* Animação de entrada */

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #555;
  transition: color 0.2s ease;

  &:hover {
    color: #e74c3c; /* Vermelho no hover para indicar fechar */
  }
`;

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

  return (
    <ModalOverlay onClick={onClose}> {/* Clicar no overlay fecha o modal */}
      <ModalContent onClick={e => e.stopPropagation()}> {/* Impede que cliques no conteúdo fechem o modal */}
        <CloseButton onClick={onClose}>&times;</CloseButton> {/* Ícone 'X' */}
        {children} {/* Conteúdo do modal (o formulário, neste caso) */}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;