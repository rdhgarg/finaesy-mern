import React from 'react';
import { Route, Switch} from 'react-router-dom'

import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import BlankLayout from './layouts/BlankLayout';

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/auth/:page" component={AuthLayout} />
            <Route path="/pages/:page" component={BlankLayout} />
            <Route path="/" component={Layout} />
          </Switch>
        </div>
    );
  }
}

export default App;
