import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';
import MainViewContainer from './src/modules/main/MainViewContainer';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainViewContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
