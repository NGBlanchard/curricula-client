import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <section className="welcome-container">
        <h1 className="welcome-header">A Community for Teachers</h1>
        <p className="landing">
          Curricula is a tool for teachers and instructors who wish to exchange
          ideas for courses, lessons, and curriculum outlines.
        </p>
        <p className="directions">Click register above or login below.</p>
        <p className="demo">
          Demo username: Demo_Person • Demo password: D3moPa55word!
        </p>
      </section>
    );
  }
}
