import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
  render() {
    return <h2><br/>{this.props.current_question}</h2>
  }
}

export default Question;
