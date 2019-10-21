import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bull } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./Nav.css";

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    sessionStorage.clear();
    window.location.href = "/login";
  };

  renderLogoutLink() {
    return (
      <span className="Nav__logged-in">
        <NavLink onClick={this.handleLogoutClick} to="/">
          Logout
        </NavLink>
      </span>
    );
  }

  renderLoginLink() {
    return (
      <span className="Nav__not-logged-in">
        <NavLink to="/register">Register</NavLink>
        <Bull />
        <Link to="/login">Log in</Link>
      </span>
    );
  }

  render() {
    return (
      <nav className="Nav">
        <img src="../../favicon.ico" alt="logo" className="logo"></img>
        <h1>
          <NavLink to="/">Curricula</NavLink>
        </h1>
        <Bull />
        <Link to="/create">Create</Link>
        <Bull />
        <NavLink to="/profile">Profile</NavLink>
        <Bull />
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
