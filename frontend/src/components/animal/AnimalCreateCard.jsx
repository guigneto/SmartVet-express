import React, { useState } from 'react';
import {
  Card,
  FormRow,
  FormLabel,
  FormInput,
  Actions,
  CardButton
} from './AnimalStyle';   // reaproveitando estilos

function AnimalCreateForm({ initialAnimal = {}, onSave, onCancel }) {
    const [form, setForm] = useState({
        animal_name: initialAnimal.animal_name || '',
        specie: initialAnimal.specie || '',
        breed: initialAnimal.breed || '',
        weight: initialAnimal.weight || 0,
        birth_year: initialAnimal.birth_year || new Date().getFullYear(),
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form); // não precisa de ID
    };

    return (
        <Card as="form" onSubmit={handleSubmit}>
          <FormRow>
            <FormLabel>Nome:</FormLabel>
            <FormInput
              name="animal_name"
              value={form.animal_name}
              onChange={handleChange}
              required
            />
          </FormRow>
    
          <FormRow>
            <FormLabel>Espécie:</FormLabel>
            <FormInput
              name="specie"
              value={form.specie}
              onChange={handleChange}
              required
            />
          </FormRow>
    
          <FormRow>
            <FormLabel>Raça:</FormLabel>
            <FormInput
              name="breed"
              value={form.breed}
              onChange={handleChange}
            />
          </FormRow>
    
          <FormRow>
            <FormLabel>Peso (kg):</FormLabel>
            <FormInput
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              min="0"
              step="0.1"
            />
          </FormRow>
    
          <FormRow>
            <FormLabel>Ano de Nasc.:</FormLabel>
            <FormInput
              type="number"
              name="birth_year"
              value={form.birth_year}
              onChange={handleChange}
              min="1900"
              max={new Date().getFullYear()}
            />
          </FormRow>
    
          <Actions>
            <CardButton type="button" className="delete" onClick={onCancel}>
              Cancelar
            </CardButton>
            <CardButton type="submit" className="edit">
              Salvar
            </CardButton>
          </Actions>
        </Card>
      );
}
    
export default AnimalCreateForm;