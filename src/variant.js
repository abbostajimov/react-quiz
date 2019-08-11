import React from 'react'

const Variants = (props) => {

  const { btnStyle, onSelectAnswer, variant, index } = props
  return(
    <button 
      className={btnStyle} 
      onClick={() => onSelectAnswer(variant, index)}
    >
      {variant}
    </button>
  )
}
export default Variants