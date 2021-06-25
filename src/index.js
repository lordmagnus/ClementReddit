import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  class Hello extends React.Component {
    render() {
      return (
        <div>
            Hello Clement! Soon you'll have a personnal reddit
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Hello />,
    document.getElementById('root')
  );
  