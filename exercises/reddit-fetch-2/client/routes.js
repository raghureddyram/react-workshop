import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, PostList } from './App.js';

const Home = () => (
  <div className='Home'>
    <h1>Home Page</h1>
  </div>
);

const About = () => (
  <div className='About'>
    {this.props.children}
  </div>
);

const FinalAbout = () => (
  <About>
    <InnerAbout />
  </About>
);

const InnerAbout = () => (
  <div>
  <h1>This is my about page...</h1>
  <p>hmm</p>
  </div>
);

const NotFound = (props) => (
  <div className='Home'>
    <h1>{props.location.pathname} not found...</h1>
  </div>
);

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={FinalAbout} />
    <Route path='r/:subreddit' component={PostList} />

    <Route path='*' component={NotFound} />
  </Route>
);
