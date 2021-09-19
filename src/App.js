import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './components/widgets/Topbar';
import Main from './components/widgets/Main';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Main>
        <h1>React App</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/" component={(routerProps) => <Home {...routerProps} />} />
            <Route exact path="/" render={(routerProps) => <Home {...routerProps} />} />
            <Route exact path="/" children={(routerProps) => <Home {...routerProps} />} />
            <Route exact path="/about" component={About} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Main>
    </div>
  );
}

export default App;
