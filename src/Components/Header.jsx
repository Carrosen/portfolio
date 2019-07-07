import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to='/'>portfolio</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='projects'>Projects</Link>
          </li>
        </ul>
      </>
    )
  }
}

export default Header