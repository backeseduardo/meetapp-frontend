import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import history from '~/services/history';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="MeetApp" />
          </Link>

          {history.location.pathname !== '/dashboard' && (
            <button type="button" onClick={handleGoBack}>
              <MdKeyboardBackspace size={20} color="#fff" />
              Voltar
            </button>
          )}
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="profile">Meu perfil</Link>
          </Profile>

          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
