import React, { Component } from 'react'
import './add-quiz.css'

export default class AddQuiz extends Component{
  state = {
    question: '',
    answer: '',
    variants: []
  }
  setValue = (event, key) => {
    this.setState({
      [key]: event.target.value
    })
  }
  setVariants = (event, index) => {
    const variants = this.state.variants.slice()
    variants[index] = event.target.value
    this.setState({
      variants: variants
    })
  }
  
  onSubmit = () => {
    const { question, answer, variants} = this.state
    if(question === '') {
      alert('Please enter a question')
      return
    } else if (answer === '') {
      alert('Please enter a correct answer')
      return
    } else if (variants === []) {
      alert('Please enter a answers')
      return
    } else {
      if (variants.length < 4) {
        alert('Please enter a answers')
        return
      }
      const emptyValues = variants.filter((val) => !val)
      if(emptyValues.length > 0) {
        alert('Please enter a answers')
        return
      }
    }
    this.props.addQuiz({question, answer, variants})
    this.setState({
      question: '',
      answer: '',
      variants: []
    })
  }
  render() {
    const { variants } = this.state
    return (
      <form className="form-card bg-light">
        <div className="form-group">
          <label htmlFor="new-question">Add a new question</label>
          <input 
            type="text" 
            className="form-control" 
            id="new-question" 
            placeholder="Add new question"
            onChange={(e) => this.setValue(e, 'question')}
            value={this.state.question}
            >
            </input>
          <small id="emailHelp" className="form-text text-muted">The added text should be in English</small>
          <div className="d-flex answer-group mb-2">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Answer" 
              onChange={(e) => this.setVariants(e, 0)}
              value={variants[0] || ''}>
            </input>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Answer" 
              onChange={(e) => this.setVariants(e, 1)}
              value={variants[1] || ''}>
            </input>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Answer" 
              onChange={(e) => this.setVariants(e, 2)}
              value={variants[2] || ''}>
            </input>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Answer" 
              onChange={(e) => this.setVariants(e, 3)}
              value={variants[3] || ''}>
            </input>
          </div>
          <input 
            type="text" 
            className="form-control w-25" 
            placeholder="Correct answer"
            onChange={(e) => this.setValue(e, 'answer')}
            value={this.state.answer}
          >
          </input>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.onSubmit}>
          Add 
          <i className="fa fa-plus"></i>
        </button>
      </form>
    )
  }
}
