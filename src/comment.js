import React from 'react';


export class Comment extends React.Component {
  /*constructor(props) {
    super(props);
    en cas de click, on appelle le lien passé en props.
    et idealement, on remonte dans l arborescence et on update app pour lancer
    une nouvelle page?
  }*/

    render() {
      const comment = this.props.comment;
      console.log("in comment")
      console.log(comment)
        return (
          <div class="comment" >
           
              <h4 class="commentAuthor">{comment.data.author}</h4>   
              <span class="commentBody">{comment.data.body}</span>   

              
         </div>
        );
      }
}