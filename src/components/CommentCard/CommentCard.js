import React, { Component } from "react";
import { NiceDate, Bull } from "../Utils/Utils";
import CourseApiService from "../../services/course-api-service";
import CourseContext from "../../context/CourseContext";
import "./CommentCard.css";

export default class CommentCard extends Component {
  state = {
    user: ""
  };
  static contextType = CourseContext;

  componentDidMount = () => {
    this.context.clearError();
    CourseApiService.getUserById(this.props.comment.user_id).then(res =>
      this.setState({
        user: res.user_name
      })
    );
  };

  render() {
    const { comment } = this.props;
    return (
      <>
        <li key={comment.id} className="comment-card">
          <p className="comment-author">
            {this.state.user}
            <Bull />
            <NiceDate date={comment.date_created} />
          </p>
          <p className="comment-content">{comment.content}</p>
        </li>
      </>
    );
  }
}
