import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container, Form } from './styles';

const TeacherList = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="search" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="search" id="week_day"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="search" id="time"/>
          </div>
        </Form>
      </PageHeader>

      <TeacherItem />
      <TeacherItem />
    </Container>
  );
}

export default TeacherList;