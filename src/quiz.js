import React from 'react'
import Variants from './variant'
import Question from './question'

const Quiz = (props) => {
  const { onSelectAnswer, answers, tests } = props
  return (
    tests.map((obj, index) => {
      let btnStyle = 'mr-2 btn btn-outline-primary'
      if (answers[index] === true) {
        btnStyle = 'mr-2 btn btn-outline-success'
      } else if (answers[index] === false) {
        btnStyle = 'mr-2 btn btn-outline-danger'
      }
      const variants = obj.variants.map((variant, i) => {
        return <Variants 
                  key={i}
                  btnStyle={btnStyle} 
                  onSelectAnswer={(variant, index) => onSelectAnswer(variant, index)}
                  variant={variant}
                  index={index}
                />
      })
      return (
        <div className="jumbotron" key={index}>
          <Question question={obj.question}/>
          {variants}
        </div>
      )
    })
  )
}
export default Quiz
