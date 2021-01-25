import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  updateCustomerSuccess,
  updateCustomerFailure,
  signCustomerFailure,
} from './actions';

export function* updateCustomer({ payload }) {
  try {
    const {
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    } = payload.data;

    const profile = {
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    };

    const response = yield call(api.put, 'customers', profile);
    Alert.alert('Sucesso!', 'Cliente atualizado com sucesso!');

    yield put(updateCustomerSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro!', 'Erro ao atualizar cliente, confira os dados!');
    yield put(updateCustomerFailure());
  }
}

export function* signUpCustomer({ payload, navigation }) {
  try {
    const {
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    } = payload;

    yield call(api.post, 'customers', {
      name,
      email,
      telefone,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    });
    Alert.alert('Sucesso!', 'Cadastro realizado!');
    navigation.navigate('Dashboard');
  } catch (err) {
    Alert.alert('Falha no cadastro!', 'Verifique seus dados!');

    yield put(signCustomerFailure());
  }
}

export default all([
  takeLatest('@customer/UPDATE_CUSTOMER_REQUEST', updateCustomer),
  takeLatest('@auth/SIGN_UP_CUSTOMER_REQUEST', signUpCustomer),
]);
