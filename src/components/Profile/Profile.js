import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import { NiceDate } from '../Utils/Utils'
import config from '../../config'


export default class CoursePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  static contextType = CourseContext


  componentDidMount() {
    // this.setState({
    //   user_name: this.context.currentUser.user_name,
    //   date_created: this.context.currentUser.date_created,
    // })
    this.context.clearError()
  }

  render() {
    // const { user_name, date_created } = this.context.currentUser
    return (
      <div className="profile-container">
      <h3>Hello,</h3>
      <p>Member since:
        <br/>
      <NiceDate
        // date={this.state.date_created}
      /></p>
      <div className="my-courses">
        <p>A grid of the user's courses. The ones they've posted and the ones they've saved.</p>
      </div>
      </div>
    )
  }
}

