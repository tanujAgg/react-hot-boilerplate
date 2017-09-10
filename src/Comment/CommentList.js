import React, { Component } from 'react';
import CommentItem from './CommentItem';

export default class CommentList extends Component {
    render() {
        const deleteComment = this.props.ondelete;
        const editcomment = this.props.onedit;
        const Index = this.props.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} ondelete={deleteComment} onedit={editcomment} />
        });
        return (
            <div>
                {Index}
            </div>
        )
    }
}
