
// External Libraries
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

// Internal Libraries
import AppBar from './components/AppBar/AppBar';

// Path Components
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Doctors from './pages/Doctors/Doctors';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import BottomBar from './components/BottomBar/BottomBar';
import Info from './pages/Info/Info';

let links = [
  {src: '/', title: 'Home'},
  {src: '/about', title: 'About Us'},
  {src: '/features', title: 'Facilities'},
  {src: '/doctors', title: 'Our Doctors'},
  {src: '/contact', title: 'Contact Us'}
];

class App extends Component {
  render() {
    return (
        <div style={{width: '100%'}}>
          <AppBar links={links}/>
            <Switch>
              <Route path="/features/:feature" component={Info} exact/>
              <Route path="/about" component={About} exact />
              <Route path="/contact" component={Contact} exact />
              <Route path="/doctors" component={Doctors} exact />
              <Route path="/features" component={Features} exact />
              <Route path='/' component={Home} exact />
            </Switch>
          <BottomBar />
        </div>
    );
  }
}

export default App;
