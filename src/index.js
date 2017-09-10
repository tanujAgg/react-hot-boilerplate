import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from "react-router";
import CommentManager from './Comment/CommentManager';
import App from './App';
import Home from './Home/Home';
import Nomatch from './Nomatch';
import CommentEdit from "./Comment/CommentEdit";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Home} />
            <Route path="comments" component={CommentManager}/>
            <Route path="*" component={Nomatch} />
        </Route>
    </Router>, document.getElementById('root'));

