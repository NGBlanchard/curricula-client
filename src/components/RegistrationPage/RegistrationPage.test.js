import RegistrationPage from "./RegistrationPage";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<RegistrationPage />", () => {
  it("Renders without crashing", () => {
    mount(
      <Router>
        <RegistrationPage />
      </Router>
    );
  });
});
