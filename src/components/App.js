import React from 'react';
import './App.css'
import '../components/App.css';
import Home from './screens/Home';
import Form from './screens/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"Jhon Doe",
      year:"2020"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Home">
          <Home 
            name={this.state.name}
            year={this.state.year}
          />
        </div>
      </div>
    );
  }
}

export default App;
