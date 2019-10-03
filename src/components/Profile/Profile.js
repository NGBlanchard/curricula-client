import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import CourseApiService from '../../services/course-api-service'


export default class CoursePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  static contextType = CourseContext


  componentDidMount() {
    const { courseId } = this.props.match.params
    this.context.clearError()
    CourseApiService.getCourse(courseId)
      .then(this.context.setCourse)
      .catch(this.context.setError)
    CourseApiService.getCommentsForCourse(courseId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  render() {
    return (
      <div>Profile</div>
    )
  }
}

