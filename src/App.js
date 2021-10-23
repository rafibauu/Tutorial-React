import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Topbar from './components/widgets/Topbar';
import Main from './components/widgets/Main';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <Main>
          <h1>React App</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/post/:slug/:id" component={Post} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Main>
      </Router>
    </div>
  );
}

export default App;
