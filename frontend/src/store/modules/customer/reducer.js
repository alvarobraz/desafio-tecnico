import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function customer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@customer/EDIT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@customer/EDIT_SUCCESS': {
        draft.loading = false;
        draft.profile = action.payload.profile;
        break;
      }
      case '@customer/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@customer/UPDATE_SUCCESS': {
        draft.profile = null;
        draft.loading = false;
        break;
      }
      case '@customer/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@customer/CREATE_REQUEST': {
        draft.loading = true;
        break;
      }
      default:
    }
  });
}
