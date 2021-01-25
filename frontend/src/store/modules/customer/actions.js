export function editCustomerRequest(id) {
  return {
    type: '@customer/EDIT_REQUEST',
    payload: { id },
  };
}

export function editCustomerSuccess(profile) {
  return {
    type: '@customer/EDIT_SUCCESS',
    payload: { profile },
  };
}

export function editCustomerFailure() {
  return {
    type: '@customer/EDIT_FAILURE',
  };
}

export function updateCustomerRequest(data) {
  return {
    type: '@customer/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateCustomerSuccess() {
  return {
    type: '@customer/UPDATE_SUCCESS',
  };
}

export function updateCustomerFailure() {
  return {
    type: '@customer/UPDATE_FAILURE',
  };
}

export function createCustomerRequest(data) {
  return {
    type: '@customer/CREATE_REQUEST',
    payload: { data },
  };
}

export function createCustomerSuccess() {
  return {
    type: '@customer/CREATE_UPDATE',
  };
}

export function createCustomerFailure() {
  return {
    type: '@customer/CREATE_FAILURE',
  };
}
