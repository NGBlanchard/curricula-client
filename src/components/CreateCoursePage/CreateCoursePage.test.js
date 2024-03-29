import CreateCoursePage from "./CreateCoursePage";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<CreateCoursePage />", () => {
  it("Renders without crashing", () => {
    mount(
      <Router>
        <CreateCoursePage />
      </Router>
    );
  });
  it("renders a Create Course by default", () => {
    const wrapper = mount(
      <Router>
        <CreateCoursePage />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
