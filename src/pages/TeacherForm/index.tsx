import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container, FieldSetDados, Footer } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningicon from '../../assets/images/icons/warning.svg';

const TeacherForm = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  const addNewScheduleitem = () => {
    setScheduleItems([
      ...scheduleItems, 
      { week_day: 0, from: '', to: '' }
    ]);
  }

  const setScheduleItemsValue = (position: number, field: string, value: string) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }

    api.post('classes', data).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Erro ao fazer cadastro');
    });
  }

  return (
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preecher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <FieldSetDados>
            <legend>Seus dados</legend>

            <Input 
              type="text" 
              name="name" 
              label="Nome completo" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input 
              type="text" 
              name="avatar" 
              label="Avatar" 
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input  
              type="text" 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </FieldSetDados>

          <FieldSetDados>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Frontend', label: 'Frontend' },
                { value: 'Backend', label: 'Backend' },
                { value: 'Mobile', label: 'Mobile' },
              ]}
            />
            <Input 
              type="text" 
              name="cost" 
              label="Custo da sua hora/aula" 
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </FieldSetDados>

          <FieldSetDados>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleitem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-Feira' },
                      { value: '2', label: 'Terça-Feira' },
                      { value: '3', label: 'Quarta-Feira' },
                      { value: '4', label: 'Quinta-Feira' },
                      { value: '5', label: 'Sexta-Feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
          </FieldSetDados>

          <Footer>
            <p>
              <img src={warningicon} alt="Aviso Importante" />
              Importante <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar Cadastro</button>
          </Footer>
        </form>
      </main>
    </Container>
  )
}

export default TeacherForm;