import React, { Component } from 'react';

export default class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            "author": "",
            "text": ""
        };
    }

    setAuthor = (event) => {
        this.setState({
            "author": event.target.value
        })
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
            "author": "",
            "text": ""
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="author">Author:</label>
                        <input type="text" value={this.state.author} onChange={this.setAuthor} className="form-control" id="author"></input>
                    </div>
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
