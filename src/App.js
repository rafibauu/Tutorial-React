import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <main className="Main">
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
      </main>
    </div>
  );
}

export default App;
