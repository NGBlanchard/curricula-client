import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className='NotFoundPage'>
        <h2>404 - That page does not exist.</h2>
        <p>Try something else, y'know?</p>
      </Section>
    )
  }
}
