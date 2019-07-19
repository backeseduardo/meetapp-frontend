import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <Container>
      <Form>
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
