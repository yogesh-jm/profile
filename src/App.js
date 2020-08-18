import React, { Component } from 'react';
import Sidebar from './components/main';
import Main from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Main/>
      </div>
    );
  }
}

export default App;
