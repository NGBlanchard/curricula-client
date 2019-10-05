import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate, Bull } from '../Utils/Utils'
import CourseApiService from '../../services/course-api-service'
import CourseContext from '../../context/CourseContext'

import './CourseListItem.css'

export default class CourseListItem extends Component {
  state = {
    user: '',
  }
  static contextType = CourseContext

  componentDidMount() {
    this.context.clearError()
    // CourseApiService.getUsers(this.props.course.id)
    // .then(user => console.log(user[0].user_name))
    // .catch(this.context.setError)  
  }

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
          {course.author && <>
            <Bull />
            <CourseAuthor course={course} user={this.state.user}/>
          </>}
        </footer>
      </Link>
    )
  }
}

function CourseStyle({ course }) {
  return (
    <span className='CourseListItem__style'>
      {course.topic}
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

function CourseAuthor({ course }) {
  return (
    <span className='CourseListItem__author'>
      {course.author}
    </span>
  )
}