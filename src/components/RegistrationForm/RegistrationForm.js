import React, { Component } from "react";
import {
  Button,
  Input,
  Required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../Utils/Utils";
import CourseService from "../../services/course-api-service";

const passwordLength = length({ min: 8, max: 60 });
const matchesPassword = matches("password");

export default class RegistrationForm extends Component {
  state = {
    error: null,
    success: false
  };

  onSubmit = e => {
    e.preventDefault();
    const { user_name, password, passwordConfirmation } = e.target;
    this.setState({ error: null });
    CourseService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        user_name.value = "";
        password.value = "";
        passwordConfirmation.value = "";
        this.setState({
          success: true
        });
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        {this.state.success ? (
          <p className="success">Registration Successful!</p>
        ) : (
          <p className="directions">
            Heads up: your password must contain 1 upper case, lower case,
            number and special character.
          </p>
        )}
        <form className="RegistrationForm" onSubmit={this.onSubmit}>
          <span role="alert">{error && <p className="red">{error}</p>}</span>
          <section className="user_name">
            <label htmlFor="RegistrationForm__user_name">
              User name <Required />
            </label>
            <Input
              name="user_name"
              type="text"
              required
              id="RegistrationForm__user_name"
            ></Input>
          </section>
          <section className="password">
            <label htmlFor="RegistrationForm__password">
              Password <Required />
            </label>
            <Input
              name="password"
              type="password"
              required
              validate={[passwordLength, isTrimmed]}
              id="RegistrationForm__password"
            ></Input>
          </section>
          <section className="password-confirm">
            <label htmlFor="RegistrationForm__password-confirm">
              Confirm Password <Required />
            </label>
            <div className="login-signup-field">
              <Input
                name="passwordConfirmation"
                type="password"
                required
                validate={[nonEmpty, matchesPassword]}
              />
            </div>
          </section>
          <Button type="submit">Sign me up</Button>
        </form>
      </>
    );
  }
}
