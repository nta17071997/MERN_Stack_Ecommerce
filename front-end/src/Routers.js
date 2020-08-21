import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
