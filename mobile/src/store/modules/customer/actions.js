export function updateCustomerRequest(data) {
  return {
    type: '@customer/UPDATE_CUSTOMER_REQUEST',
    payload: { data },
  };
}

export function updateCustomerSuccess(profile) {
  return {
    type: '@customer/UPDATE_CUSTOMER_SUCCESS',
    payload: { profile },
  };
}

export function updateCustomerFailure() {
  return {
    type: '@customer/UPDATE_CUSTOMER_REQUEST',
  };
}

export function signUpCustomerRequest(
  name,
  email,
  telefone,
  cep,
  logradouro,
  bairro,
  localidade,
  uf
) {
  return {
    type: '@auth/SIGN_UP_CUSTOMER_REQUEST',
    payload: { name, email, telefone, cep, logradouro, bairro, localidade, uf },
  };
}

export function signCustomerFailure() {
  return {
    type: '@customer/SIGN_CUSTOMER_FAILURE',
  };
}
