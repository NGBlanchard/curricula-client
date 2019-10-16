import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome-header">A Community for Teachers</h1>
        <p className="landing">Curricula is a tool for teachers and instructors who wish to exchange ideas for courses, lessons, and curriculum outlines.</p>
        <p className="directions">Click register above or login below.</p> 
      </div>
    )
  }
}