import React from 'react';
import createStore from './store/createStore'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

const {store, persistor} = createStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
      </PersistGate>
    </Provider>
  );
}

export default App;
