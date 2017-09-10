import React, { Component } from 'react';
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const guid = require("guid");

export default class CommentManager extends Component {

  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  addComment = (comment) => {
    comment.id = guid.create().value;
    this.setState({ comments: this.state.comments.concat(comment) });
  }

  deleteComment = (comment) => {
    this.setState({ comments: this.state.comments.filter((val) => val.id === comment.id ? false : true )});
  }

  editComment = (comment) => {
    debugger;
    this.setState({ comments: this.state.comments.map((val) => val.id === comment.id ? comment : val )});
  }

  render() {
    const commentText = this.state.comments && this.state.comments.length > 0 ? null : <h2>Be the first one to write a comment</h2>;
    return (
      <div>
        {commentText}
        <CommentList comments={this.state.comments} ondelete={this.deleteComment} onedit={this.editComment}/>
        <CommentForm onsubmit={this.addComment} />
      </div>
    );
  }
}
