import React, { Component } from 'react';
import io from 'socket.io-client';
import DrawingBoard from './DrawingBoard';

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
        <DrawingBoard/>
      </div>
    );
  }
}

export default App;
