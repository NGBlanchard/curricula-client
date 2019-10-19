import React, { Component } from "react";

export const nullCourse = {
  author: {},
  tags: []
};

const CourseContext = React.createContext({
  course: nullCourse,
  courseList: [],
  topics: [],
  userList: [],
  filteredList: [],
  courses: [],
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCourse: () => {},
  setCourseList: () => {},
  clearCourse: () => {},
  setComments: () => {},
  addComment: () => {},
  setCourses: () => {},
  addCourse: () => {},
  setCurrentUser: () => {},
  setUserList: () => {},
  filterTopics: () => {},
  filterList: () => {}
});

export default CourseContext;

export class CourseProvider extends Component {
  state = {
    userList: [],
    courseList: [],
    filteredList: [],
    topics: [],
    courses: [],
    comments: [],
    course: nullCourse,
    error: null
  };

  filterList = term => {
    const filteredList = this.state.courseList.filter(
      course => course.topic === term
    );
    this.setState({
      filteredList: filteredList
    });
  };

  filterTopics = courseList => {
    const filteredtopics = this.state.courseList.map(t => t.topic);
    this.setState({
      topics: filteredtopics
    });
  };

  setCourseList = courseList => {
    this.setState({ courseList });
  };

  setUserList = userList => {
    this.setState({ userList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setCourse = course => {
    this.setState({ course });
  };

  setCourses = courses => {
    this.setState({ courses });
  };

  setComments = comments => {
    this.setState({ comments });
  };

  clearCourse = () => {
    this.setCourse(nullCourse);
    this.setComments([]);
  };

  addComment = comment => {
    this.setState(prevState => ({
      comments: [...prevState.comments, comment]
    }));
  };

  addCourse = course => {
    this.setCourses([...[this.state.courses], course]);
    this.setState(prevState => ({
      courseList: [...prevState.courseList, course]
    }));
  };

  render() {
    const value = {
      course: this.state.course,
      comments: this.state.comments,
      courseList: this.state.courseList,
      filteredList: this.state.filteredList,
      topics: this.state.topics,
      currentUser: this.state.currentUser,
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
      setUserList: this.setUserList,
      filterTopics: this.filterTopics,
      filterList: this.filterList,
      register: this.state.register
    };
    return (
      <CourseContext.Provider value={value}>
        {this.props.children}
      </CourseContext.Provider>
    );
  }
}
