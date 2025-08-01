import api from "./api"

const endpoint = `/SmartVet/animals`

const animalService = {
    async getAll() {
        const response = await api.get(endpoint);
        return response.data.data.map(animalData => new Animal(animalData));
    },

    async getById(id) {
        const response = await api.get(`${endpoint}/${id}`);
        return new Animal(response.data.data);
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
    _id
    name
    species
    breed
    birthYear
    weight

    constructor({ _id, name, species, breed, birthYear, weight }) {
        this._id = _id,
        this.name = name,
        this.species = species,
        this.breed = breed,
        this.birthYear = birthYear,
        this.weight = weight
    }

    get displayName() {
        return `${this.name} (${this.species})`;
    }

    toJsonWithId() {
        return {
            _id: this._id,
            name: this.name,
            species: this.species,
            breed: this.breed,
            weight: this.weight,
            birthYear: this.birthYear
        }
    }

    toJsonWithoutId() {
        return {
            name: this.name,
            species: this.species,
            breed: this.breed,
            weight: this.weight,
            birthYear: this.birthYear
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