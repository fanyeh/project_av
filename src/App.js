import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg-near-white helvetica relative">
          <Header />
          <Route render={({ location }) => <Main location={location} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
