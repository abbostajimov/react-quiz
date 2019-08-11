import React from 'react'

const Header = (props) => {
  const { score } = props
  return (
    <header className="position-fixed w-100">
      <nav className="navbar navbar-light bg-secondary">
        <span className="navbar-brand mb-0 h1 text-white">Welcome to quiz! <i className="fa fa-book"/></span>
        <span className="navbar-brand mb-0 h1 text-white">Your score: {score}</span>
      </nav>
    </header>
  )
}

export default Header