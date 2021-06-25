import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './nav.js'
import './index.css';


  class Hello extends React.Component {
    render() {
      return (
        
        <html>
          <Nav />
          <div>
            Hello Clement! Soon you'll have a personnal reddit
          </div>
        </html>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(

    <Hello />,
    document.getElementById('root')
  );
  