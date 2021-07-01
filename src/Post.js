
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'
import {Box} from './box';
import {Comment} from './comment';
//const data = ["r/Channel","Title","https://homepages.cae.wisc.edu/~ece533/images/airplane.png","num comm"]

export default function Post () {
  /*constructor(props) {
    super(props);
    en cas de click, on appelle le lien passé en props.
    et idealement, on remonte dans l arborescence et on update app pour lancer
    une nouvelle page?
  }*/
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [items, setItems] = useState([]);
  const location = useLocation()

  useEffect(() => {
      console.log("https://www.reddit.com"+location.state.substring(0, location.state.length - 1) + ".json")
    fetch("https://www.reddit.com"+location.state.substring(0, location.state.length - 1) + ".json")
      .then(res => res.json())
      .then(
        (result) => {
         // setIsLoaded(true);
          setItems(result);
         // items = result
         /* console.log(result)
          console.log(result.data.children)
          console.log("coucou")*/
         // console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
         // setIsLoaded(true);
          setError(error);
        }
      ).finally(() => { setIsLoaded(true)})
  },[location] )

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || items === []) {
    return <div>Loading...</div>;
  } else {
     return (
         <div class="post">
             This is a post page  
             <Box post={items[0].data.children[0]}/> 
             <ul>
              {items[1].data.children.map(item => (
              <li key={item.id}>
               <Comment comment={item}/>
              </li>
               ))}
             </ul>
        </div>
       );
    }
}
