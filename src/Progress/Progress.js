import React, { Component } from 'react';
import './Progress.css';

class ProgressBar extends Component {
  render() {
    return <p><br/><br/>{this.props.current_step}/{this.props.question_length}</p>
  }
}

export default ProgressBar;
