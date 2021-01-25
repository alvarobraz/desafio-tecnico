import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import customer from './customer/reducer';

export default combineReducers({
  auth,
  user,
  customer,
});
