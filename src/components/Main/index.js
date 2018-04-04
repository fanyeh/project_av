import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

class Main extends Component {
  render() {
    const location = this.props.location;
    return (
      <TransitionGroup component="main">
        <CSSTransition key={location.key} classNames="slide" timeout={550}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Main;
