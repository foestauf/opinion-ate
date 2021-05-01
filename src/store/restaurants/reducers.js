import { combineReducers } from 'redux';
import { STORE_RESTAURANTS, START_LOADING } from './actions';

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_RESTAURANTS:
      return false;
    default:
      return state;
  }
};

const loadError = () => true;

export default combineReducers({
  records,
  loading,
  loadError,
});
