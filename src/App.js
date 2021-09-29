import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/movie" component={Movie}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
