import React, { Component } from 'react';
import './MultiChoice.css';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) => <button key={i} onClick={() => this.props.updateSelected(answer)}><h4>{answer}</h4></button>)}
        <br />
        <br />
        <h4>You have selected: {this.props.selectedAnswer}</h4>
        <br/>
        <button onClick={this.props.handleSubmit}><h4>Submit</h4></button>
      </div>
    )
  }
}

export default MultiChoice;
