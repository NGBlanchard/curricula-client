import React, { Component } from 'react'
import { Button, Input, Required, nonEmpty, matches, length, isTrimmed } from '../Utils/Utils'
import config from '../../config'

const passwordLength = length({min: 8, max: 72})
const matchesPassword = matches('password')

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }
  state = { error: null }


  onSubmit = e => {
    e.preventDefault()
    const { user_name, password } = e.target
    const user = {
      user_name: user_name.value,
      password: password.value,
      date_created: new Date()
    }
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
    .then(() => this.props.onRegistrationSuccess())
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.onSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            validate={[passwordLength, isTrimmed]}
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='password-confirm'>
          <label htmlFor='RegistrationForm__password-confirm'>
            Confirm Password <Required />
          </label>
        <div className="login-signup-field">
          <Input 
            name="passwordConfirmation"  
            type="password" 
            required
            validate={[ nonEmpty, matchesPassword]}/>
        </div>
        </div>
        <Button type='submit'>
          Sign me up
        </Button>
      </form>
    )
  }
}
