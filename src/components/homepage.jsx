import * as React from 'react';
import {Link} from 'react-router';
import { ReactCSSTransitionGroup} from 'react-addons-css-transition-group';

export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to the home page</h1>
        <ul>
          <li><Link to='/'>HomePage</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="page-transition">
        {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
