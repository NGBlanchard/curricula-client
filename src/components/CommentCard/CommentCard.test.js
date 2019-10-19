import CommentCard from "./CommentCard";
import React from "react";
import { configure, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<CommentCard />", () => {
  const comment = {
    id: 1,
    user_id: 2
  };

  const context = {
    clearError() {
      this.setState({ error: null });
    }
  };
  it("Renders without crashing", () => {
    mount(
      <CommentCard key={comment.id} comment={comment} user={comment.user_id} />,
      context
    );
  });

  it("renders a Comment by default", () => {
    const wrapper = mount(
      <CommentCard key={comment.id} comment={comment} user={comment.user_id} />,
      context
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
