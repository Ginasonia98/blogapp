import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postReducer from '../postState';
import postSaga from '../postSaga';
import Home from './index';

import '@/styles/globals.css';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: [sagaMiddleware],
});

const App: React.FC = () => {
  useEffect(() => {
    sagaMiddleware.run(postSaga);
  }, []);

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;


