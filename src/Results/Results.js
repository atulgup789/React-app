import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
  render() {
    return  (
      <div>
        <h1 >Congratulations, you have finished!}</h1>
        <h2>Your score was: {this.props.score}</h2>
        <br/>
        <h2><button id="a" onClick={this.props.retry}>Retry</button></h2>
      </div>
    )
  }
}

export default Results;
