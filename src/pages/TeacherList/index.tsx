import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { FiSearch } from 'react-icons/fi';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Form } from './styles';



const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = async(e: FormEvent) => {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <Container id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              {value: 'Frontend', label: 'Frontend'},
              {value: 'Backend', label: 'Backend'},
              {value: 'Mobile', label: 'Mobile'},
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da Semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-Feira'},
              {value: '2', label: 'Terça-Feira'},
              {value: '3', label: 'Quarta-Feira'},
              {value: '4', label: 'Quinta-Feira'},
              {value: '5', label: 'Sexta-Feira'},
              {value: '6', label: 'Sábado'},
            ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            <FiSearch size={25}/>
          </button>
        </Form>
      </PageHeader>

      {teachers.map((teacher: Teacher) => {
        return <TeacherItem  key={teacher.id} teacher={teacher}/>
      })}
    </Container>
  );
}

export default TeacherList;