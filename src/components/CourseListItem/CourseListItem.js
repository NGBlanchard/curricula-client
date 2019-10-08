import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate } from '../Utils/Utils'
import CourseApiService from '../../services/course-api-service'
import CourseContext from '../../context/CourseContext'

import './CourseListItem.css'


export default class CourseListItem extends Component {
  state = {
    user: "",
  }
  static contextType = CourseContext

    componentDidMount = () => {
      // console.log(this.props.course.author)
      this.context.clearError()
      CourseApiService.getUserById(this.props.course.author)
      .then(res =>
        this.setState({
          user: res.user_name
        })
      )}

  render() {
    const { course } = this.props
    return (
      <Link to={`/course/${course.id}`} className='CourseListItem'>
        <header className='CourseListItem__header'>
          <h2 className='CourseListItem__heading'>
            {course.title}
          </h2>
          <CourseDate course={course} />
        </header>
        <footer className='CourseListItem__footer'>
          <CourseStyle course={course} />
          <span className='CourseListItem__author'>
            <p className='CourseListItem__author'>
              Created by  {this.state.user}
            </p>
          </span>
        </footer>
      </Link>
    )
  }
}

function CourseStyle({ course }) {
  return (
    <span className='CourseListItem__style'>
      Topic : {course.topic}
    </span>
  )
}

function CourseDate({ course }) {
  return (
    <span className='CourseListItem__date'>
      <NiceDate
        date={course.date_created}
      />
    </span>
  )
}