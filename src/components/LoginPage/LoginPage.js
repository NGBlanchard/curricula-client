import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'
import LoginNav from '../Nav/LoginNav'
import Welcome from './Welcome'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  onLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <>
      <LoginNav />
      <Welcome />
      <Section className='LoginPage'>
      <div className="success-alert">
          {<p className='success'>Your registration was a success :)</p>}
        </div>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.onLoginSuccess}
        />
      </Section>
      </>
    )
  }
}
