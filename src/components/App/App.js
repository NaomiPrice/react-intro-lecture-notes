import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
// import Information from '../Information/Information';
import Form from '../Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Information /> */}
        <Form />
      </div>
    );
  }
}

export default App;
