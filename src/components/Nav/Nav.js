import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Bull } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import './Nav.css'

export default class Nav extends Component {
  handleLogoutClick = () => {
  }

  renderLogoutLink() {
    return (
      <div className='Nav__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Nav__not-logged-in'>
        <Link
          to='/register'>
          Register
        </Link>
        <Bull />
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Nav'>
        <h1>
          <Link to='/'>
            Curricula
          </Link>
        </h1>
        <Bull />
        <Link to='/create'>
          Create
        </Link>
        <Bull />
        <Link to='/profile'>
          Profile
        </Link>
        <Bull />  
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    )
  }
}
