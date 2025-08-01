import React, { useState } from 'react';
import { Animal, AnimalDelete, AnimalUpdate } from "../../services/AnimalService";
import { Actions, AnimalBirthYear, AnimalBreed, AnimalInfo, AnimalName, AnimalSpecie, AnimalWeight, Card, CardButton } from "./AnimalStyle";
import AnimalForm from './AnimalUpdateCard';



export function AnimalCard({ animal, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async (updatedAnimal) => {
    try {
      const animal = new Animal({_id: updatedAnimal._id, name: updatedAnimal.name, species: updatedAnimal.species, breed: updatedAnimal.breed, birthYear: updatedAnimal.birthYear, weight: updatedAnimal.weight})
      const response = await AnimalUpdate(animal._id, animal)
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
      const response = await AnimalDelete(animal._id)
      onDelete?.(animal._id);            // avisa o pai (opcional)
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
        <AnimalName>{animal.name}</AnimalName>
        <AnimalSpecie>Espécie: {animal.species}</AnimalSpecie>
        <AnimalBreed>Raça: {animal.breed}</AnimalBreed>
        <AnimalWeight>Peso: {animal.weight}kg</AnimalWeight>
        <AnimalBirthYear>Ano de Nascimento: {animal.birthYear}</AnimalBirthYear>
      </AnimalInfo>

      <Actions>
        <CardButton className="edit" onClick={() => setIsEditing(true)}>Editar</CardButton>
        <CardButton className="delete" onClick={handleDelete}>Excluir</CardButton>
      </Actions>
    </Card>
  );
}