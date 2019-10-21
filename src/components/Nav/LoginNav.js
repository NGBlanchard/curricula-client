import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bull } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./Nav.css";

export default class LoginNav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    sessionStorage.clear();
    window.location.href = "/login";
  };

  renderLogoutLink() {
    return (
      <span className="Nav__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </span>
    );
  }

  renderLoginLink() {
    return (
      <span className="Nav__not-logged-in">
        <Link to="/register">Register</Link>
        <Bull />
        <Link to="/login">Log in</Link>
      </span>
    );
  }

  render() {
    return (
      <nav className="Nav">
        <h1>
          <Link to="/">Curricula</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
