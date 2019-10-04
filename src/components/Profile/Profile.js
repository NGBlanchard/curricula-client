import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import CourseApiService from '../../services/course-api-service'


export default class CoursePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  static contextType = CourseContext


  // componentDidMount() {
    
  //   this.context.clearError()
  // }

  render() {
    // const { user_name } = CourseContext.currentUser
    return (
      <div>Wait</div>
    )
  }
}

