import React, { Component } from "react";
import CourseContext from "../../context/CourseContext";
import CourseApiService from "../../services/course-api-service";
import { Section } from "../Utils/Utils";
import CourseListItem from "../CourseListItem/CourseListItem";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";

import "./CourseListPage";

export default class CourseListPage extends Component {
  state = {
    users: []
  };
  static contextType = CourseContext;

  componentDidMount() {
    this.context.clearError();
    CourseApiService.getCourses()
      .then(this.context.setCourseList)
      .then(this.context.filterTopics())
      .catch(this.context.setError);
  }

  renderCourses() {
    const { courseList = [] } = this.context;
    const { filteredList = [] } = this.context;
    if (filteredList.length > 0) {
      return filteredList.map(course => (
        <CourseListItem key={course.id} course={course} />
      ));
    }
    return courseList.map(course => (
      <CourseListItem key={course.id} course={course} />
    ));
  }

  render() {
    const { courseList = [] } = this.context;
    const { error } = this.context;
    return (
      <>
        <Nav />
        <Search courseList={courseList} filterList={() => this.filterList()} />
        <Section list className="CourseListPage">
          {error ? (
            <p className="red">
              There was an error. Try something else, y'know?
            </p>
          ) : (
            this.renderCourses()
          )}
        </Section>
      </>
    );
  }
}
