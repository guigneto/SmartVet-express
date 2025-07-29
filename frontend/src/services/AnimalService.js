import api from "./api"

const endpoint = `/SmartVet/Animal`

const animalService = {
    async getAll() {
        const response = await api.get(endpoint);
        return response.data.map(animalData => new Animal(animalData));
    },

    async getById(id) {
        const response = await api.get(`${endpoint}/${id}`);
        return new Animal(response.data);
    },

    async create(animal) {
        const payload = animal.toJsonWithoutId();
        const response = await api.post(endpoint, payload);
        return new StatusCode(response.status, response.statusText)
    },

    async update(id, animal) {
        const payload = animal.toJsonWithId();
        const response = await api.put(`${endpoint}/${id}`, payload);
        return new StatusCode(response.status, response.statusText)
    },

    async delete(id) {
        const response = await api.delete(`${endpoint}/${id}`);
        return new StatusCode(response.status, response.statusText)
  }
}

// Classe animal para facilitar o uso
export class Animal{
    animal_name
    birth_year
    breed
    id
    specie
    weight

    constructor({ id, animal_name, specie, breed, birth_year, weight }) {
        this.id = id,
        this.animal_name = animal_name,
        this.specie = specie,
        this.breed = breed,
        this.birth_year = birth_year,
        this.weight = weight
    }

    get displayName() {
        return `${this.name} (${this.species})`;
    }

    toJsonWithId() {
        return {
            id: this.id,
            animal_name: this.animal_name,
            specie: this.specie,
            breed: this.breed,
            weight: this.weight,
            birth_year: this.birth_year
        }
    }

    toJsonWithoutId() {
        return {
            animal_name: this.animal_name,
            specie: this.specie,
            breed: this.breed,
            weight: this.weight,
            birth_year: this.birth_year
        }
    }
}

// StatusCode é o retorno de alguns services, importante para verificar se as operações ocorreram com sucesso
class StatusCode {
    status
    mensagem
    constructor(status, mensagem) {
        this.status = status
        this.mensagem = mensagem
    }

    getStatus() {
        return `${this.status}: ${this.mensagem}`
    }
}

// Essas são as funções efetivamente usadas
export async function AnimalGetAll() {
    const res = await animalService.getAll()
    return await res
}

export async function AnimalGetById(id) {
    const res = await animalService.getById(id)
    return await res
}

export async function AnimalCreate(animal) {
    const res = await animalService.create(animal)
}

export async function AnimalUpdate(id, animal) {
    const res = await animalService.update(id, animal)
}

export async function AnimalDelete(id) {
    const res = await animalService.delete(id)
}