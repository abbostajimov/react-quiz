import React, { Component } from 'react';
import tests from './tests'
import Quiz from './quiz'
import Header from './header'
import AddQuiz from './add-quiz';
import "./app.css";

class App extends Component {
  state = {
    score: 0,
    answers: [],
    tests: tests
  }
  addQuiz = (quiz) => {
    const tests = this.state.tests.slice()
    tests.push(quiz)
    this.setState({
      tests: tests
    })
  }
  onSelectAnswer = (variant, index) => {
    const { tests } = this.state
    if(tests[index].answer === variant) {
      this.setState((prevState) => {
        const answers = prevState.answers.slice()
        answers[index] = true
        return {
          score: prevState.score + 10,
          answers: answers
        }
      })
    } else {
      const answers = this.state.answers.slice()
      answers[index] = false
      this.setState({
        answers: answers
      })
    }
  }
  render() {
    
    return (
      <>
        <Header score={this.state.score}/>
        <div className="main">
          <AddQuiz addQuiz={(quiz) => this.addQuiz(quiz)}/>
          <Quiz answers={this.state.answers} 
                onSelectAnswer={(variant, index) => this.onSelectAnswer(variant, index)}
                tests={this.state.tests}
          />
        </div>
      </>
    )
  }
  
}

export default App;
