// AtendimentoUpdateForm.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: ${({ variant }) => variant === 'cancel' ? '#ccc' : '#3498db'};
  color: ${({ variant }) => variant === 'cancel' ? '#333' : '#fff'};

  &:hover {
    opacity: 0.9;
  }
`;

const AtendimentoUpdateForm = ({ animal, atendimento, descricao, onChangeDescricao, onCancel, onSave }) => {
  return (
    <FormWrapper>
      <h2>Registrar Atendimento</h2>
      <p><strong>Animal:</strong> {animal?.name ?? 'Desconhecido'}</p>

      <Label>Descrição do Resultado:</Label>
      <TextArea
        rows={4}
        value={descricao}
        onChange={(e) => onChangeDescricao(e.target.value)}
      />

      <ButtonGroup>
        <Button variant="cancel" onClick={onCancel}>Cancelar</Button>
        <Button onClick={onSave}>Salvar</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

export default AtendimentoUpdateForm;
