import React from 'react';
import {Box} from './box'

export class BoxContainer extends React.Component {
    render() {
        return (
          <ul class="boxContainer">
           <li> <Box /> </li>
           <li> <Box /> </li>
         </ul>
        );
      }
}
