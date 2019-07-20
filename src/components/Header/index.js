import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>Eduardo Backes</strong>
            <Link to="profile">Meu perfil</Link>
          </Profile>

          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
