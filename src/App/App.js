import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import Progress from '../Progress/Progress';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0
    }

    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);

    this.quiz_data = [
      
      {
       question: '1. Inside which HTML element do we put the JavaScript?',
       correct_answer: '<javascript>',
       possible_answers: ['<script>', '<javascript>', '<js>', '<scripting>']
      },
      {
       question: '2. Where is the correct place to insert a JavaScript?',
       correct_answer: 'Both the <head> section and the <body> section are correct',
       possible_answers: ['The <head> section', 'The <body> section', 'Both the <head> section and the <body> section are correct']
      },
       {
       question: '3. The external JavaScript file must contain the <script> tag',
       correct_answer: 'False',
       possible_answers: ['False', 'True']
      },
      {
       question: '4. How do you create a function in JavaScript?',
       correct_answer: 'function myFunction()',
       possible_answers: ['function:myFunction()', 'function myFunction()', 'function = myFunction()']
      },
      {
       question: '5.  How can you add a comment in a JavaScript?',
       correct_answer: '//This is a comment',
       possible_answers: ['This is a comment', '//This is a comment', '<!--This is a comment-->']
      },
      {
       question: '6. JavaScript is the same as Java.',
       correct_answer: 'False',
       possible_answers: ['False', 'True']
      },
      {
       question: '7. What is the correct JavaScript syntax for opening a new window called "w2" ?',
       correct_answer: 'w2 = window.open("http://www.w3schools.com',
       possible_answers: ['w2 = window.open("http://www.w3schools.com");', 'w2 = window.new("http://www.w3schools.com");']
      },
      {
       question: '8. Which event occurs when the user clicks on an HTML element?',
       correct_answer: 'onclick',
       possible_answers: [' onchange', 'onmouseclick', 'onmouseover', 'onclick']
      },
      {
       question: '9.  How do you declare a JavaScript variable?',
       correct_answer: 'var carName',
       possible_answers: ['var carName', 'variable carName', 'v carName']
      },
      {
       question: '10. Is JavaScript case-sensitive?',
       correct_answer: 'Yes',
       possible_answers: ['No', 'Yes']
      }
    ]
  }

  submitAnswer() {
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'None yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'None yet!'
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  retryQuiz() {
    this.setState({
      progress: 0,
      selected: 'None yet!',
      score: 0
    })
  }


  render() {

    return (
      <div className="App">
        <h1>QuizApp</h1>
        <br/>

        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question current_question={this.quiz_data[this.state.progress].question} />
            <Progress current_step={this.state.progress + 1} question_length={this.quiz_data.length} />
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
              <br/>
              
          </div>
        )
        : (
        <Results score={this.state.score} end_message="Congratulations, you have finished!" retry={this.retryQuiz} />
         )}
         <br/>
      </div>
    );
  }
}

export default App;
