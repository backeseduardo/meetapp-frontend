import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    yield put(signInSuccess(response.data.token, response.data.user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    toast.error('Erro. Verifique o usuário e senha.');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
