import React from 'react';

import {
  Router, Route, hashHistory, IndexRoute
} from 'react-router';

// We'll import the Index component from this
// src/containers directory directly
import { Index } from './Index';

// We'll load our views from the `src/views`
// directory
import Home from '../views/Home/Home';
import About from '../views/About/About';

export class App extends React.Component {
  render() {
    const createElement = (Component, props) => {
      return <Component
              actions={this.props.actions}
              {...props} />;
    };
    return (
      <Router history={hashHistory}
        createElement={createElement}>
        <Route path="/" component={Index}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}

export default App;
