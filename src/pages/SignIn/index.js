import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSignIn({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSignIn}>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha Área 51"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
