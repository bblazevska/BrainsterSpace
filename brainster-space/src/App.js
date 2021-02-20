
import './App.css';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AcademiesPage from "./components/AcademiesPage";
import EventSpacePage from './components/EventSpacePage';
import EventsPage from './components/EventsPage';
import Footer from './components/Footer';
import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/akademies" component={AcademiesPage}/>
          <Route path="/events" component={EventsPage} />
          <Route path="/events_space" component={EventSpacePage} />
        </Switch>
        <Footer />
    </Router>
    )
  }
}

export default App;