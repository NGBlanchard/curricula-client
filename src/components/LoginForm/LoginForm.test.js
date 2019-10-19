import LoginForm from "./LoginForm";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<LoginForm />", () => {
  it("Renders without crashing", () => {
    mount(<LoginForm />);
  });
  it("renders Login Form by default", () => {
    const wrapper = mount(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
