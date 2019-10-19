import React, { Component } from "react";
import CourseApiService from "../../services/course-api-service";
import TokenService from "../../services/token-service";
import CourseContext from "../../context/CourseContext";

import { Button, Input } from "../Utils/Utils";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };
  static contextType = CourseContext;

  handleAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;
    CourseApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.setUser(res.user.user_name);
        TokenService.setDate(res.user.date_created);
        TokenService.setUserId(res.user.id);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <form className="LoginForm" onSubmit={this.handleAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="user_name">
            <label htmlFor="LoginForm__user_name">Username</label>
            <Input name="user_name" id="LoginForm__user_name"></Input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <Input
              name="password"
              type="password"
              id="LoginForm__password"
            ></Input>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </>
    );
  }
}
