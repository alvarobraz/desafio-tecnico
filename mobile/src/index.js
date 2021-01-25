import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar, YellowBox } from 'react-native';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#f5f5f5" />
        <App />
      </PersistGate>
    </Provider>
  );
}
