import React, { useState } from 'react';
import { Animal, AnimalDelete, AnimalUpdate } from "../../services/AnimalService";
import { Actions, AnimalBirthYear, AnimalBreed, AnimalInfo, AnimalName, AnimalSpecie, AnimalWeight, Card, CardButton } from "./AnimalStyle";
import AnimalForm from './AnimalUpdateCard';



export function AnimalCard({ animal, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async (updatedAnimal) => {
    try {
      const animal = new Animal({id: updatedAnimal.id, animal_name: updatedAnimal.animal_name, specie: updatedAnimal.specie, breed: updatedAnimal.breed, birth_year: updatedAnimal.birth_year, weight: updatedAnimal.weight})
      const response = await AnimalUpdate(animal.id, animal)
      onUpdate?.(updatedAnimal);        // avisa o pai (opcional)
      setIsEditing(false);


    } catch (err) {
      console.error('Erro ao atualizar animal', err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Tem certeza que deseja excluir este animal?')) return;
    try {
      // await animalService.delete(animal.id);
      const response = await AnimalDelete(animal.id)
      onDelete?.(animal.id);            // avisa o pai (opcional)
    } catch (err) {
      console.error('Erro ao excluir animal', err);
    }
  };

  if (isEditing) {
    return (
      <AnimalForm
        initialAnimal={animal}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <Card>
      <AnimalInfo>
        <AnimalName>{animal.animal_name}</AnimalName>
        <AnimalSpecie>Espécie: {animal.specie}</AnimalSpecie>
        <AnimalBreed>Raça: {animal.breed}</AnimalBreed>
        <AnimalWeight>Peso: {animal.weight}kg</AnimalWeight>
        <AnimalBirthYear>Ano de Nascimento: {animal.birth_year}</AnimalBirthYear>
      </AnimalInfo>

      <Actions>
        <CardButton className="edit" onClick={() => setIsEditing(true)}>Editar</CardButton>
        <CardButton className="delete" onClick={handleDelete}>Excluir</CardButton>
      </Actions>
    </Card>
  );
}