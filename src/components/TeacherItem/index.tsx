import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { MainList } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <MainList>
      <article className="teacher-item">
        <header>
          <img src="https://avatars1.githubusercontent.com/u/47330738?s=460&u=02d0cda3560db0a0cf54e34ca235df32c7f4531d&v=4" alt="profile" />
          <div>
            <strong>Gabriel Nascimento</strong>
            <span>GraphQL</span>
          </div>
        </header>

        <p>
          Apaixonado por aprender coisas novas e <br /> <br />
            venho aqui para ensinar GraphQL dessa vez
          </p>

        <footer>
          <p>
            Preço/hora
              <strong>R$ 750,00</strong>
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