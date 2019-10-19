import RegistrationForm from "./RegistrationForm";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<RegistrationForm />", () => {
  it("Renders without crashing", () => {
    mount(<RegistrationForm />);
  });
});
