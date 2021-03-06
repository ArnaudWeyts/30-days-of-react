import {createStore, bindActionCreators, combineReducers, applyMiddleware} from 'redux';
import * as currentTime from './modules/currentTime';
import * as currentUser from './modules/currentUser';
import 'whatwg-fetch';

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }

  const {url} = action.meta;
  const fetchOptions = Object.assign({}, action.meta);

  fetch(url, fetchOptions)
    .then(resp => resp.json())
    .then(json => {
       if (typeof action.meta.onSuccess === 'function') {
        action.meta.onSuccess(json);
      }
      return json; // For the next promise in the chain
    })
    .then(json => {
      let newAction = Object.assign({}, action, {payload: json});
      delete newAction.meta;
      store.dispatch(newAction);
    });
};

export const configureStore = () => {
  const reducer = combineReducers({
    currentTime: currentTime.reducer,
    currentUser: currentUser.reducer
  });
  const store = createStore(reducer, applyMiddleware(apiMiddleware));

  const actions = {
    currentTime: bindActionCreators(currentTime.actions, store.dispatch),
    currentUser: bindActionCreators(currentUser.actions, store.dispatch)
  };

  return {store, actions};
};

export default configureStore;
