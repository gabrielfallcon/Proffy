import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { MainList } from './styles';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
  return (
    <MainList>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>

        <p>
          {teacher.bio}  
        </p>

        <footer>
          <p>
            Preço/hora
              <strong>R$ {teacher.cost},00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
        </footer>
      </article>
    </MainList>
  );
}

export default TeacherItem;