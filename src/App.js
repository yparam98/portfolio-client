import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { default as PortfolioMain } from './Components/Portfolio/Main';
import { default as Splash } from './Components/Splash/Splash';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div class="pagecont">
            <Switch>
              {/* <Route path="/portfolio">
                <PortfolioMain />
              </Route> */}
              <Route path="/">
                <PortfolioMain />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
