import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import { rootSaga } from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    createLogger(),
  )),
);

sagaMiddleware.run(rootSaga);
