import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function customer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@customer/UPDATE_CUSTOMER_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@customer/SIGN_CUSTOMER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
