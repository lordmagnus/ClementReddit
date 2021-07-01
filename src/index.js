import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './nav.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoxContainer from './boxContainer.js'
import './index.css';
import Post from './Post';

/*          <Switch>
              <Route exact path='/' component={BoxContainer}/>
              <Route path='/post' component={Post}/>
          </Switch>*/

  class App extends React.Component {
    render() {
      return (
        
        <main>
          <Nav />
          <div>
            Hello Clement! Soon you'll have a personnal reddit
          </div>
          <Switch>
              <Route exact path='/' component={BoxContainer}/>
              <Route exact path='/post' component={Post}/>
          </Switch>

         
        </main>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
  