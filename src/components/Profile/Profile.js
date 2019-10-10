import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import TokenService from '../../services/token-service';
import { NiceDate } from '../Utils/Utils'
import Nav from '../Nav/Nav'


export default class CoursePage extends Component {
  state = {
    currentUser: [],
    userDate: []
  }
  static defaultProps = {
    match: { params: {} },
  }
  static contextType = CourseContext

  componentDidMount() {
    const currentUser = TokenService.getUser()
    const userDate = TokenService.getDate()
    this.setState({
      currentUser: currentUser,
      userDate: userDate
    })
    }

  render() {
    return (
      <>
      <Nav />
      <div className="profile-container">
      <h3>Hello, {this.state.currentUser}</h3>
      <p>Member since:
        <br/>
      <NiceDate
        date={this.state.userDate} />
        </p>
      <div className="my-courses">
        <p></p>
      </div>
      </div>
      </>
    )
  }
}

