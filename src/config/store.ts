import { createStore, applyMiddleware, compose } from 'redux';
import { createRootReducer } from '../reducers';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(
    createRootReducer(), 
    compose(
        applyMiddleware(
            thunk,
            logger,
        ),
    ),
);

export {
  store,
}