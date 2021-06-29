import React from 'react';

//const data = ["r/Channel","Title","https://homepages.cae.wisc.edu/~ece533/images/airplane.png","num comm"]

export class Box extends React.Component {
  /*constructor(props) {
    super(props);

  }*/
    render() {
      const post = this.props.post;
        return (
          <div class="box">
              <h4 class="boxChannel">{post.data.subreddit_name_prefixed}</h4>   
              <h2 class="boxTitle">{post.data.title}</h2>   
              <img class="boxImage" src={post.data.thumbnail} alt="Post thumbnail"></img>  
         </div>
        );
      }
}
