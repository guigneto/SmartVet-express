import styled from "styled-components";

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

export const AtendimentoButton = styled.button`
  padding: 15px 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  margin-bottom: 16px;
  width: 190px;

  &.new-atendimento {
    color: white;
    background-color: ${colors.successGreen};
     &:hover {
    background-color:rgb(45, 175, 99);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  }

  &.atendido {
    background-color: ${colors.primaryBlue};
    color: white;
    &:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.atendeu {
    background-color: ${colors.secondaryOrange};
    color: white;
    &:hover {
      background-color: #d35400;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &.attended {
    background-color: ${colors.successGreen};
    color: white;
    &:hover {
      background-color: #27ae60;
      transform: translateY(-1px);
    }
  }

  &.gave-up {
    background-color: ${colors.errorRed};
    color: white;
    &:hover {
      background-color: #c0392b;
      transform: translateY(-1px);
    }
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background: #fdfdfd;
`;

export const AnimalInfo = styled.div`
  margin-bottom: 12px;
`;

export const AnimalName = styled.h3`
  margin: 0;
`;

export const AnimalSpecie = styled.p`
  margin: 4px 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const CardButton = styled.button`
  padding: 15px 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &.edit {
    background-color: ${colors.primaryBlue};
    color: white;
    &:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  &.delete {
    background-color: ${colors.secondaryOrange};
    color: white;
    &:hover {
      background-color: #d35400;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;