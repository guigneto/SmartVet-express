import React, { useState } from 'react';
import styled from 'styled-components';

import {
  FormRow,
  FormLabel,
  FormInput,
  Button
} from '../animal/AnimalStyle';

const FormContainer = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem; // Espaçamento entre as linhas do formulário
`;

// container para alinhar os botões à direita.
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem; // Espaçamento entre os botões
  margin-top: 1rem;
`;


function AtendimentoForm({ animals, onSave, onCancel }) {
  const [form, setForm] = useState({
    date: '',
    urgency: '',
    description: '',
    animalId: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (

    <FormContainer onSubmit={handleSubmit}>
      
      {/* cada par de label/input com FormRow */}
      <FormRow>
        <FormLabel htmlFor="animalId">Animal:</FormLabel>
        
        <FormInput as="select" id="animalId" name="animalId" onChange={handleChange} value={form.animalId} required>
          <option value="">Selecione um animal</option>
          {animals.map((a) => (
            <option key={a._id} value={a._id}>{a.name}</option>
          ))}
        </FormInput>
      </FormRow>

      <FormRow>
        <FormLabel htmlFor="urgency">Urgência:</FormLabel>
        <FormInput as="select" id="urgency" name="urgency" onChange={handleChange} value={form.urgency} required>
          <option value="">Selecione a urgência</option>
          <option value={0}>Baixa</option>
          <option value={1}>Média</option>
          <option value={2}>Alta</option>
          <option value={3}>Urgente</option>
        </FormInput>
      </FormRow>

      <FormRow>
        <FormLabel htmlFor="date">Data do Atendimento:</FormLabel>
        <FormInput type="datetime-local" id="date" name="date" onChange={handleChange} value={form.date} required />
      </FormRow>


      <ButtonContainer>
        <Button type="button" className="delete" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" className="new-animal">
          Salvar
        </Button>
      </ButtonContainer>
      
    </FormContainer>
  );
}

export default AtendimentoForm;