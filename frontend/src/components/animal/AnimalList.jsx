import React, { useEffect, useMemo, useState } from 'react';
import { Animal, AnimalCreate, AnimalGetAll } from '../../services/AnimalService';
import { AnimalCard } from './AnimalCard';
import { Card, CardButton, FilterInput, Button, FilterDiv, AnimalListDiv, AnimalCardDiv, SearchContainer, SearchIcon, SearchInput } from './AnimalStyle';
import AnimalCreateForm from './AnimalCreateCard'
import Modal from '../Modal';

function AnimalList() {
  const [animals, setAnimals] = useState([]);     // aqui o estado que o React observa
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilterSection] = useState(false)
  const [filterInputs, setFilterInputs] = useState({
    name: '',
    breed: '',
    specie: '',
    birth_year: '',
    weight: ''
  })
  const [filters, setFilters] = useState({
    name: '',
    breed: '',
    specie: '',
    birth_year: '',
    weight: ''
  });

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const data = await AnimalGetAll();
        setAnimals(data);                         // atualiza o estado
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const searchedAnimals = animals.filter(animal =>
    animal?.animal_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal?.breed?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal?.specie?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(animal?.birth_year) === String(searchTerm) ||
    String(animal?.weight) === searchTerm
  );

  const filteredAnimals = useMemo(() => {
    return animals.filter((a) =>
      (!filters.name ||
        a.animal_name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.breed ||
        a.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
      (!filters.specie ||
        a.specie.toLowerCase().includes(filters.specie.toLowerCase())) &&
      (!filters.birth_year ||
        String(a.birth_year) === String(filters.birth_year)) &&
      (!filters.weight || String(a.weight) === String(filters.weight))
    );
  }, [animals, filters]);

  if (loading) return <p>Carregando...</p>;

  const handleUpdated = (updated) =>
    setAnimals((prev) =>
      prev.map((a) => (a.id === updated.id ? updated : a))
    );

  const handleDeleted = (id) =>
    setAnimals((prev) => prev.filter((a) => a.id !== id));

  const handleCreated = async (createdAnimal) => {
    try {
      const animal = new Animal({ id: createdAnimal.id, animal_name: createdAnimal.animal_name, specie: createdAnimal.specie, breed: createdAnimal.breed, birth_year: createdAnimal.birth_year, weight: createdAnimal.weight })
      await AnimalCreate(animal);
      const data = await AnimalGetAll();
      setAnimals(data);
      setCreating(false);
    } catch (err) {
      console.error('Erro ao criar animal', err);
    }
  };

  const handleFilterChange = (e) =>
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterButton = () => {
    setFilterSection(!filter)
  }
  const handleInputChange = (e) =>
    setFilterInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  const handleApplyFilters = () => {
    setFilters(filterInputs);
  };

  const handleClearFilters = () => {
    setFilterInputs({
      name: '',
      breed: '',
      specie: '',
      birth_year: '',
      weight: ''
    });
    setFilters({
      name: '',
      breed: '',
      specie: '',
      birth_year: '',
      weight: ''
    });

  }

  return (
    <AnimalListDiv style={{backgroundColor:'#f0f2f5', borderRadius:'15px', }}>
      {!filter && (
        <div style={{ display: 'flex', gap:'10px', flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: '40px'}}>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar Animal..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input"
            />
            <SearchIcon>🔍</SearchIcon>
          </SearchContainer>
          <Button className="edit" onClick={handleFilterButton}>
            {filter ? 'Fechar Filtros' : 'Listar Filtros'}
          </Button>
          <Button className="new-animal" onClick={() => setCreating(true)}>
            Novo Animal
          </Button>
        </div>
      )}
      {filter && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <FilterDiv>
            <FilterInput
              name="name"
              placeholder="Filtrar por nome"
              value={filters.name}
              onChange={handleFilterChange}
              className="input"
            />

            <FilterInput
              name="specie"
              placeholder="Filtrar por espécie"
              value={filters.specie}
              onChange={handleFilterChange}
              className="input"
            />

            <FilterInput
              name="breed"
              placeholder="Filtrar por raça"
              value={filters.breed}
              onChange={handleFilterChange}
              className="input"
            />

            <FilterInput
              name="weight"
              placeholder="Filtrar por peso (kg)"
              type="number"
              value={filters.weight}
              onChange={handleFilterChange}
              className="input"
            />

            <FilterInput
              name="birth_year"
              placeholder="Filtrar por ano de nascimento"
              type="number"
              value={filters.birth_year}
              onChange={handleFilterChange}
              className="input"
            />

            <Button className="delete" onClick={handleClearFilters}>
              Limpar filtros
            </Button>
          </FilterDiv>

          <Button className="edit" onClick={handleFilterButton}>
            {filter ? 'Fechar Filtros' : 'Abrir Filtros'}
          </Button>
        </div>
      )}

      

      {creating && (
        <Modal isOpen={creating} onClose={() => setCreating(false)}>
          <AnimalCreateForm
            onSave={handleCreated}
            onCancel={() => setCreating(false)}
          />
        </Modal>
      )}

      {/* {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} onUpdate={handleUpdated} onDelete={handleDeleted} />
      ))} */}
      <AnimalCardDiv>
        {(filteredAnimals.length === 0) ? (
          <p>Nenhum animal encontrado.</p>
        ) : (filter && (
          filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onUpdate={handleUpdated}
              onDelete={handleDeleted}
            />
          )
          ))

        )
        }
        {!filter &&
          searchedAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              onUpdate={handleUpdated}
              onDelete={handleDeleted}
            />))
        }
      </AnimalCardDiv>
    </AnimalListDiv>
  );
}

export default AnimalList;