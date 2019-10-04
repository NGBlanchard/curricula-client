import React, { Component } from 'react'

export const nullCourse = {
  author: {},
  tags: [],
}

const CourseContext = React.createContext({
  course: nullCourse,
  courseList: [],
  courses: [],
  comments: [],
  currentUser: {
    user_name: '',
  },
  error: null,
  setError: () => {},
  clearError: () => { },
  setCourse: () => {},
  setCourseList: () => {},
  clearCourse: () => {},
  setComments: () => {},
  addComment: () => {},
  setCourses: () => {},
  addCourse: () => {},
  setCurrentUser: () => {}
})

export default CourseContext

export class CourseProvider extends Component {
  state = {
    currentUser: {
      user_name: '',
    },
    courseList: [],
    courses: [],
    comments: [],
    course: nullCourse,
    error: null,
  }

  setCourseList = courseList => {
    this.setState({ courseList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setCourse = course => {
    this.setState({ course })
  }

  setCourses = courses => {
    this.setState({ courses })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearCourse = () => {
    this.setCourse(nullCourse)
    this.setComments([])
  }

  addComment = comment => {
    this.setState(prevState => ({
      comments: [...prevState.comments, comment]
    }))
  }

  addCourse = course => {
    this.setCourses([
      ...[this.state.courses],
      course
    ])
    this.setState(prevState => ({
      courseList: [...prevState.courseList, course]
      }))
  }

  setCurrentUser = user => {
    this.setState({
      currentUser: {
        user_name: user
      }
    })
  }

  render() {
    const value = {
      course: this.state.course,
      comments: this.state.comments,
      courseList: this.state.courseList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCourse: this.setCourse,
      setCourseList: this.setCourseList,
      setComments: this.setComments,
      clearCourse: this.clearCourse,
      addComment: this.addComment,
      setCourses: this.setCourses,
      addCourse: this.addCourse,
      setCurrentUser: this.setCurrentUser,
    }
    return (
      <CourseContext.Provider value={value}>
        {this.props.children}
      </CourseContext.Provider>
    )
  }
}
