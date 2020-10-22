import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Users';
import About from './About';


class MyPage extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users' component={Users} />
        </BrowserRouter>
      </div>
    );
  }
}

export default MyPage;