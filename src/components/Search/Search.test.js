import Search from "./Search";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<Search />", () => {
  const courseList = [];
  const filterList = () => {
    return;
  };
  it("Renders without crashing", () => {
    mount(
      <Router>
        <Search courseList={courseList} filterList={() => filterList()} />
      </Router>
    );
  });
  it("renders Search component by default", () => {
    const wrapper = mount(
      <Router>
        <Search courseList={courseList} filterList={() => filterList()} />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
