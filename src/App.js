import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Press from './components/Press'
import NavBar from './components/NavBar'
import {Container} from 'semantic-ui-react'
import './App.css';

function App() {
  return (
  <>
    <NavBar/>
   <Container>
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/Contact' component={Contact} />
     <Route exact path='/Menu' component={Menu} />
     <Route exact path='/Press' component={Press} />
     </Switch>
    </Container>
  </>
  );
}

export default App;
