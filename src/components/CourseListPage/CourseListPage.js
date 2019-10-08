import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import CourseApiService from '../../services/course-api-service'
import { Section } from '../Utils/Utils'
import CourseListItem from '../CourseListItem/CourseListItem'
import Search from '../Search/Search';



export default class CourseListPage extends Component {
  state = {
    users: [],
  }
  static contextType = CourseContext

  componentDidMount() {
    this.context.clearError()
    CourseApiService.getCourses()
      .then(this.context.setCourseList)
      .catch(this.context.setError)
  
    // CourseApiService.getUsers()
    // .then(res =>
    //       this.setState({
    //         users: res
    //       }))
    // const { courseList = [] } = this.context
    // this.getUsersForCourse(this.state.users, courseList)
  }

  // getUsersForCourse = (users, courseList) => (
  //   (!courseList)
  //     ? users
  //     : users.filter(user => user.id == course.author)
  //   )
  
  renderCourses() {
    const { courseList = [] } = this.context
    return courseList.map(course =>
      <CourseListItem
        key={course.id}
        course={course}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <>
      <Search />
      <Section list className='CourseListPage'>
        {error
          ? <p className='red'>There was an error. Try something else, y'know?</p>
          : this.renderCourses()}
      </Section>
      </>
    )
  }
}