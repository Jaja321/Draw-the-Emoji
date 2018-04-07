import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

class App extends Component {
  

  componentDidMount(){
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Hello World </h1>
      </div>
    );
  }
}

export default App;
