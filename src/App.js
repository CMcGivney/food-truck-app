import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import FAQ from './components/FAQ'
import Menu from './components/Menu'
import Events from './components/Events'
import NavBar from './components/NavBar'
import Footer from './components/FooterAlt'
import {Container} from 'semantic-ui-react'
import './App.css'

function App() {
  return (
  <>
   <Container fluid style={{margin: "3em"}}>
    <NavBar/>
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
     <Route exact path='/FAQ' component={FAQ} />
     <Route exact path='/Menu' component={Menu} />
     <Route exact path='/Events' component={Events} />
     </Switch>
    </Container>
    <Footer/>
  </>
  );
}

export default App;
