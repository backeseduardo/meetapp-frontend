import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSignIn({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <img src={logo} alt="MeetApp" />

        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha Área 51"
        />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </Container>
  );
}
