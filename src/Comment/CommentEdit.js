import React, { Component } from 'react';

export default class CommentEdit extends Component {
    constructor() {
        super();
        this.state = {
            "text": ""
        };
    }

    setText = (event) => {
        this.setState({
            "text": event.target.value
        })
    }

    onsubmit = (event) => {
        event.preventDefault();
        this.props.onsubmit(this.state);
        this.setState({
            "text": ""
        });
    }

    render() {
        return (
            <div>
                <h3> edit your comment here </h3>
                <form>
                    <div className="form-group">
                        <label for="comment">Comment:</label>
                        <textarea value={this.state.text} onChange={this.setText} className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.onsubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
