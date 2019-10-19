import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  it("Renders without crashing", () => {
    mount(
      <Router>
        <Nav />
      </Router>
    );
  });
  it("renders Navigation Bar by default", () => {
    const wrapper = mount(
      <Router>
        <Nav />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
