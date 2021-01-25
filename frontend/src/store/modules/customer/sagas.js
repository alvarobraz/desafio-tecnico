import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  editCustomerSuccess,
  editCustomerFailure,
  updateCustomerSuccess,
  updateCustomerFailure,
  createCustomerSuccess,
  createCustomerFailure,
} from './actions';

import history from '../../../services/history';

export function* editCustomer({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/customers/${id}`);

    yield put(editCustomerSuccess(response.data));

    history.push('/customer_edit');
  } catch ({ response }) {
    yield put(editCustomerFailure());
    console.tron.log(response.data.error);
  }
}

export function* updateCustomer({ payload }) {
  const {
    id,
    name,
    email,
    telefone,
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  } = payload.data;
  console.tron.log(payload.data);

  try {
    const response = yield call(api.put, `/customers/${id}`, {
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    });
    console.tron.log(response.data);

    yield put(updateCustomerSuccess(response.data));

    toast.success('Entregador atualizado!');

    history.push('/dashboard');
  } catch ({ response }) {
    yield put(updateCustomerFailure());
    console.tron.log(response.data.error);
  }
}

export function* createCustomer({ payload }) {
  const { id, name, email, avatar_id } = payload.data;

  try {
    yield call(api.post, '/customers', {
      id,
      name,
      email,
      avatar_id,
    });

    yield put(createCustomerSuccess());

    toast.success('Entregador adicionado!');

    history.push('/entregadores');
  } catch ({ response }) {
    yield put(createCustomerFailure());
    console.tron.log(response.data.error);
    toast.error(response.data.error);
  }
}

export default all([
  takeLatest('@customer/EDIT_REQUEST', editCustomer),
  takeLatest('@customer/UPDATE_REQUEST', updateCustomer),
  takeLatest('@customer/CREATE_REQUEST', createCustomer),
]);
