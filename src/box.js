import React from 'react';
import { Link } from 'react-router-dom'
//const data = ["r/Channel","Title","https://homepages.cae.wisc.edu/~ece533/images/airplane.png","num comm"]

export class Box extends React.Component {
  /*constructor(props) {
    super(props);
    en cas de click, on appelle le lien passé en props.
    et idealement, on remonte dans l arborescence et on update app pour lancer
    une nouvelle page?
  }*/

    render() {
      const post = this.props.post;
        return (
          <div class="box" >
            <Link to={{pathname:'/post', state:post.data.permalink}}>
              <h4 class="boxChannel">{post.data.subreddit_name_prefixed}</h4>   
              <h2 class="boxTitle">{post.data.title}</h2>   
              <img class="boxImage" src={post.data.thumbnail} alt="Post thumbnail"></img>  
              </Link>
         </div>
        );
      }
}
