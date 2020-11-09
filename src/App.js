import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { default as Portfolio_Main } from './Components/Portfolio/Main';
import { default as Splash } from './Components/Splash/Main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="site-bg">
        <BrowserRouter>
          <div class="pagecont">
            <Switch>
              <Route path="/portfolio">
                <Portfolio_Main />
              </Route>
              <Route path="/">
                <Splash />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
