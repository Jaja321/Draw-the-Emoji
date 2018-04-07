import React, { Component } from 'react';
import initCanvas from '../utils';

class DrawingBoard extends Component {
  constructor(props){
    super(props);
    this.canvasRef= React.createRef();
  }

  componentDidMount(){
    initCanvas(this.canvasRef.current);
  }

  render() {
    return (
        <canvas className="whiteboard" ref={this.canvasRef}></canvas>
    );
  }
}

export default DrawingBoard;

