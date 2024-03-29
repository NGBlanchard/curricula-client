import React, { Component } from "react";
import CourseContext from "../../context/CourseContext";
import CourseApiService from "../../services/course-api-service";
import { NiceDate, Bull, Section } from "../Utils/Utils";
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import Nav from "../Nav/Nav";

import "./CoursePage.css";

export default class CoursePage extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = CourseContext;

  componentDidMount() {
    const { courseId } = this.props.match.params;
    this.context.clearError();
    CourseApiService.getCourse(courseId)
      .then(this.context.setCourse)
      .catch(this.context.setError);
    CourseApiService.getCommentsForCourse(courseId)
      .then(this.context.setComments)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearCourse();
  }

  renderCourse() {
    const { course, comments } = this.context;

    return (
      <>
        <Nav />
        <h1>{course.title}</h1>
        <h3 id="topic">Topic: {course.topic}</h3>
        <p>
          Posted on
          <Bull />
          <NiceDate date={course.date_created} />
          <Bull />
          by {course.author}
        </p>
        <section className="card">
          <h3>Course Description</h3>
          <p className="CoursePage__description">{course.description}</p>
        </section>
        <section className="card">
          <h3>Teaching Notes</h3>
          <p className="CoursePage__notes">{course.notes}</p>
        </section>
        <section className="card">
          <h3>Readings & Resources</h3>
          <p className="CoursePage__readings">{course.readings}</p>
        </section>
        <section className="duration">
          <h3>Estimated Duration </h3>
          <p className="CoursePage__duration">{course.duration} weeks</p>
        </section>
        <section>
          <h3>Blurbs</h3>
          <ul className="CoursePage__comment-list">
            {comments.map((comment, index) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                user={comment.user_id}
              />
            ))}
          </ul>
        </section>
        <CommentForm render={comments} />
      </>
    );
  }

  render() {
    const { error, course } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Course doesn't exist` ? (
          <p className="red">Course not found</p>
        ) : (
          <p className="red">There was an annoying error</p>
        );
    } else if (!course.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderCourse();
    }
    return <Section className="CoursePage">{content}</Section>;
  }
}
