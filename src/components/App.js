import React from 'react';
import './App.css'
import '../components/App.css';
import Home from './screens/Home';
import Form from './screens/Form';

function App() {
  return (
    <div className="App">
      <div className="Home">
        <Form />
      </div>
    </div>
  );
}

export default App;
