import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AtendimentoButton } from './AtendimentoStyle';
import { Appointment, AtendimentoCreate, AtendimentoGetAll, AtendimentoUpdate } from '../../services/AtendimentoService';
import Modal from '../Modal';
import AtendimentoForm from './AtendimentoForm';
import { AnimalGetAll } from '../../services/AnimalService';
import AtendimentoCard from './AtendimentoCard';
import AtendimentoUpdateForm from './AtendimentoUpdateForm';


// Paleta de cores (para consistência com as outras páginas)
const colors = {
  primaryBlue: '#3498db', // Azul vibrante
  secondaryOrange: '#e67e22', // Laranja energético
  lightBlue: '#81d4fa', // Azul mais claro
  darkGray: '#333',
  mediumGray: '#555',
  lightGrayBg: '#f0f2f5',
  successGreen: '#2ecc71',
  errorRed: '#e74c3c',
  neutralGray: '#95a5a6', // Um cinza neutro para ações secundárias
  infoBlue: '#3498db', // Azul para informações
};

const QueueListContainer = styled.div`
  margin-top: 50px;
  background-color: ${colors.lightGrayBg};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

const QueueListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QueueListTitle = styled.h2`
  color: ${colors.darkGray};
  font-size: 2.2rem;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
`;

const QueueItem = styled.div`
  background-color: white;
  border: 1px solid ${colors.lightBlue};
  border-radius: 10px;
  padding: 20px 25px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const AnimalInfo = styled.div`
  flex-grow: 1; /* Ocupa o espaço restante */
`;

const AnimalName = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.primaryBlue};
  margin: 0;
`;

const QueueActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);

  &.attended {
    background-color: ${colors.successGreen};
    color: white;
    &:hover {
      background-color: #27ae60;
      transform: translateY(-1px);
    }
  }

  &.gave-up {
    background-color: ${colors.errorRed};
    color: white;
    &:hover {
      background-color: #c0392b;
      transform: translateY(-1px);
    }
  }
`;

const EmptyQueueMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.mediumGray};
  padding: 30px;
  border: 2px dashed ${colors.lightBlue};
  border-radius: 10px;
  background-color: #f0f8ff; /* Fundo azul bem clarinho */
`;



export function AtendimentoList() {

  const [atendimentos, setAtendimentos] = useState([]); //array de atendimentos
  const [animals, setAnimals] = useState([]); //array de animais
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState(null);
  const [descricaoResultado, setDescricaoResultado] = useState('');

  const naoAtendidos = atendimentos.filter(atendimento => !atendimento.resultDescription); 

  const fetchData = async () => { //pega os dados do backend
    setLoading(true);
    try {
      const [atendimentosData, animalsData] = await Promise.all([AtendimentoGetAll(), AnimalGetAll()]);
      setAtendimentos(atendimentosData);
      setAnimals(animalsData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;

  const handleNovoAtendimento = async (formData) => {
    try {
      const appointment = new Appointment({
        scheduled_date: formData.scheduled_date,
        urgency: parseInt(formData.urgency), // só para garantir que é número
        result_description: formData.result_description,
        animalId: formData.animalId
      });

      await AtendimentoCreate(appointment); // chama o serviço com os campos corretos
      const data = await AtendimentoGetAll();
      setAtendimentos(data);
      setCreating(false);
    } catch (err) {
      console.error('Erro ao criar atendimento', err);
    }
  };

  const onRegistrar = (id) => {
    const atendimento = atendimentos.find(a => a.id === id);
    if (atendimento) {
      setAtendimentoSelecionado(atendimento); //abre modal
      setDescricaoResultado(atendimento.resultDescription || ''); //preenche descricao se existir no banco
    }
  };

  const handleSalvarDescricao = async () => {
    try {
      //parametro: atributos que o backend espera (melhorar isso no service)
      const atualizado = new Appointment({
        id: atendimentoSelecionado.id,
        scheduled_date: atendimentoSelecionado.scheduledDate, 
        urgency: atendimentoSelecionado.urgency,
        result_description: descricaoResultado,
        animalId: atendimentoSelecionado.animalId
      });

      await AtendimentoUpdate(atendimentoSelecionado.id, atualizado);

      // atualiza a lista após salvar
      const atualizados = await AtendimentoGetAll();
      setAtendimentos(atualizados);

      
      setAtendimentoSelecionado(null);// fecha modal
      setDescricaoResultado('');// limpa a descrição
    } catch (error) {
      console.error("Erro ao atualizar atendimento:", error);
    }
  };


  return (

    <QueueListContainer>
      <Modal isOpen={creating} onClose={() => setCreating(false)}>
        <AtendimentoForm
          animals={animals}
          onSave={handleNovoAtendimento}
          onCancel={() => setCreating(false)}
        />
      </Modal>
      <Modal isOpen={!!atendimentoSelecionado} onClose={() => setAtendimentoSelecionado(null)}>
        <AtendimentoUpdateForm
          animal={animals.find(a => a.id === atendimentoSelecionado?.animalId)}
          atendimento={atendimentoSelecionado}
          descricao={descricaoResultado}
          onChangeDescricao={setDescricaoResultado}
          onCancel={() => setAtendimentoSelecionado(null)}
          onSave={handleSalvarDescricao}
        />
      </Modal>
      <QueueListHeader>
        <QueueListTitle>Animais na Fila ({naoAtendidos.length})</QueueListTitle>
        <AtendimentoButton className='new-atendimento' onClick={() => setCreating(true)}>
          Novo Atendimento
        </AtendimentoButton>
      </QueueListHeader>

      {atendimentos.length === 0 ? (
        <EmptyQueueMessage>
          A fila de atendimento está vazia no momento. Adicione um atendimento!
        </EmptyQueueMessage>
      ) : (
        [...atendimentos]
          .sort((a, b) => {
            if (a.urgency !== b.urgency) return b.urgency - a.urgency;
            return new Date(a.scheduled_date) - new Date(b.scheduled_date);
          })
          .map(atendimento => {
            const animal = animals.find(a => a.id === atendimento.animalId);
            if ((atendimento.resultDescription) !== "") return null; // não renderiza se já tiver resultado
            return (
              <AtendimentoCard
                key={atendimento.id}
                animal={animal}
                atendimento={atendimento}
                onRegistrar={onRegistrar}
              />
            );
          })

      )}
    </QueueListContainer>
  );
}

export default AtendimentoList;