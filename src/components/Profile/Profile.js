import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import TokenService from '../../services/token-service';
import { NiceDate } from '../Utils/Utils'


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
      <div className="profile-container">
      <h3>Hello, {this.state.currentUser}</h3>
      <p>Member since:
        <br/>
      <NiceDate
        date={this.state.userDate} />
        </p>
      <div className="my-courses">
        <p>A grid of the user's courses. The ones they've posted and the ones they've saved.</p>
      </div>
      </div>
    )
  }
}

