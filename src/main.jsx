import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

//Components
import HomePage from './components/homepage';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';

require('./main.scss');

class App extends React.Component {

  render () {
    return(
      <div>
        <h1>React App with Routing</h1>

        <Router history={ browserHistory }>
          <Route path='/' component={HomePage}>
            <Route path='signup' component={SignUp}/>
            <Route path='login' component={Login} />
          </Route>
        </Router>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
