import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
