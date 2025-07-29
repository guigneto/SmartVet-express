// src/styles/components.js

import styled from 'styled-components';

const colors = {
    primary: '#0A3D62',
    secondary: '#0c5b9e',
    accent: '#FF8C00',
    accentHover: '#FFA500',
    white: '#FFFFFF',
    text: '#333',
    lightGray: '#f4f7fa',
    danger: '#E74C3C',
    success: '#2ECC71',
    border: '#eee',
};

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%; // Faz o card preencher o espaço do grid

  h3 {
    color: ${colors.secondary};
    margin-top: 0;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.4rem;
  }
`;

export const PrimaryButton = styled.button`
  background-color: ${colors.accent};
  color: ${colors.white};
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: ${colors.accentHover};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; // Permite que a lista cresça
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${colors.border};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fafafa;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.color || colors.text};
  font-size: 1.3rem;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.2s, color 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.1);
    background-color: #f0f0f0;
  }
`;