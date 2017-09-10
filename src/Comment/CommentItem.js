import React, { Component } from 'react';

export default class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      comment: Object.assign({}, this.props.comment)
    };
  }

  deleteComment = () => {
    this.props.ondelete(this.props.comment);
  }

  toggleEditStatus = () => {
    this.setState({
      editing: !this.state.editing
    })
  }


  editCommentText = (e) => {
    var newObj = Object.assign({}, this.state.comment);
    newObj.text = e.target.value;
    this.setState({
      comment: newObj
    });
  }

  onCommentSave = () => {
    this.props.onedit(this.state.comment);
    this.toggleEditStatus();
  }

  render() {
    var Index;
    if (this.state.editing) {
      Index = (
        <form>
          <div className="form-group">
            <textarea value={this.state.comment.text} onChange={this.editCommentText} className="form-control" rows="5" id="comment"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.onCommentSave}>Save</button>
            <button className="btn btn-primary" onClick={this.toggleEditStatus}>Cancel</button>
          </div>
        </form>
      )
    }
    else {
      Index = (
        <div>
          <h3>
            {this.props.comment.author}
          </h3>
          <p>
            {this.props.comment.text}
          </p>
          <button className="btn btn-primary" onClick={this.deleteComment}>Delete</button>
          <button className="btn btn-primary" onClick={this.toggleEditStatus}>Edit</button>
        </div>
      )
    }
    return (
      <div>
        {Index}
      </div>
    );
  }
}
