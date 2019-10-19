import CourseListPage from "./CourseListPage";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<CourseListPage />", () => {
  const course = {
    id: 4,
    title: "title",
    description: "description",
    readings: "readings",
    notes: "notes",
    topic: "topic",
    date_created: "date",
    author_id: 2
  };

  const context = {
    clearError() {
      return;
    },
    setCourseList() {
      return;
    },
    filterTopics() {
      const filteredtopics = this.state.courseList.map(t => t.topic);
      this.setState({
        topics: filteredtopics
      });
    },
    courseList: [],
    filteredList: []
  };
  it("Renders without crashing", () => {
    mount(
      <Router>
        <CourseListPage key={course.id} course={course} />
      </Router>,
      context
    );
  });
  it("renders the page by default", () => {
    const wrapper = mount(
      <Router>
        <CourseListPage key={course.id} course={course} />
      </Router>,
      context
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
