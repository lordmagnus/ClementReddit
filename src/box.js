import React from 'react';

const data = ["r/Channel","Title","https://homepages.cae.wisc.edu/~ece533/images/airplane.png","num comm"]

export class Box extends React.Component {
    render() {
        return (
          <div class="box">
              <h4>{data[0]}</h4>   
              <h2>{data[1]}</h2>   
              <img src={data[2]} alt="plane"></img>  
         </div>
        );
      }
}
