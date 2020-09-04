import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './components/Counter/CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <body>
        <CounterContainer />
      </body>
    </div>
  );
}

export default App;
