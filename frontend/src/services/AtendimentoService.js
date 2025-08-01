import api from "./api"

const endpoint = `/SmartVet/appointments`

export const atendimentoService = {
    async getAll() {
        const response = await api.get(endpoint);
        return response.data.data.map(item => new Appointment(item));
    },

    async getById(id) {
        const response = await api.get(`${endpoint}/${id}`);
        return new Appointment(response.data);
    },

    async create(appointment) {
        const payload = appointment.toJsonWithoutId();
        const response = await api.post(endpoint, payload);
        return new StatusCode(response.status, response.statusText)
    },

    async update(id, appointment) {
        const payload = appointment.toJsonWithId();
        const response = await api.put(`${endpoint}/${id}`, payload);
        return new StatusCode(response.status, response.statusText)
    },

    async delete(id) {
        const response = await api.delete(`${endpoint}/${id}`);
        return new StatusCode(response.status, response.statusText)
    }
}

// exemplo de uso
// { data, status } = atendimentoService.getAll()
// { data, status } = atendimentoService.getById(id)
// { data, status } = atendimentoService.create(payload)
// { data, status } = atendimentoService.update(id, payload)
// { data, status } = atendimentoService.delete(id)

// OBS: id e payload devem ser no formato especificado no Swagger

//lembrar de ajustar os nomes dos campos para o padrão do Swagger
export class Appointment {
    constructor({ _id, date, urgency, description, animalId, appointmentAnimalId }) {
  this._id = _id;
  this.date = new Date(date);
  this.urgency = urgency;
  this.description = description;
  this.animalId = animalId ?? appointmentAnimalId;
}

    get formattedDate() {
        return this.date.toLocaleString('pt-BR');
    }

    toJsonWithId() {
        return {
            _id: this._id,
            date: this.date.toISOString(),
            urgency: this.urgency,
            description: this.description,
            animalId: this.animalId
        };
    }

    toJsonWithoutId() {
        return {
            date: this.date.toISOString(),
            urgency: this.urgency,
            description: this.description,
            animalId: this.animalId
        };
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
export async function AtendimentoGetAll() {
    const res = await atendimentoService.getAll()
    return await res
}

export async function AtendimentoGetById(id) {
    const res = await atendimentoService.getById(id)
    return await res
}

export async function AtendimentoCreate(atendimento) {
    const res = await atendimentoService.create(atendimento)
}

export async function AtendimentoUpdate(id, atendimento) {
    const res = await atendimentoService.update(id, atendimento)
}

export async function AtendimentoDelete(id) {
    const res = await atendimentoService.delete(id)
}