import LoginPage from "./LoginPage";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import toJson from "enzyme-to-json";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<LoginPage />", () => {
  it("Renders without crashing", () => {
    mount(
      <Router>
        <LoginPage />
      </Router>
    );
  });
  it("renders Login Page by default", () => {
    const wrapper = mount(
      <Router>
        <LoginPage />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
