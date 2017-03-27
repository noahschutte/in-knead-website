import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App';
import Eula from './eula';
import PrivacyPolicy from './PrivacyPolicy';
import createBrowserHistory from 'history/createBrowserHistory'
// import './index.css';

const history = createBrowserHistory()

class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route pattern="/" component={App} />
          <Route pattern="/eula" component={Eula} />
          <Route pattern="/privacypolicy" component={PrivacyPolicy} />
        </div>
      </Router>
    )
  }
}

render(<Root/>, document.querySelector('#root'))
