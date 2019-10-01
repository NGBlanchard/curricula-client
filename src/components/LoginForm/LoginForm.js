import React, { Component } from 'react'

import config from '../../config'

import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target
    const user = {
      user_name: user_name.value,
      password: password.value
    }
    return fetch(`${config.API_ENDPOINT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    ///must validate user and retrieve token
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
    .then(() => this.props.onLoginSuccess())
  }


  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <Input
            name='user_name'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
