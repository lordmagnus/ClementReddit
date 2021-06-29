import React, {useEffect, useState} from 'react';
//import useFetch from "react-fetch-hook"
import {Box} from './box'

export default function BoxContainer()  {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then(res => res.json())
      .then(
        (result) => {
         // setIsLoaded(true);
          setItems(result);
          console.log(result)
          console.log(result.data.children)
          console.log("coucou")
          //console.log(items.data.children)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
         // setIsLoaded(true);
          setError(error);
        }
      ).finally(() => { setIsLoaded(true)})
  },[] )
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
 
      <ul>
        {items.data.children.map(item => (
          <li key={item.id}>
            <Box post={item}/>
          </li>
        ))}
      </ul>
    );
  }

}
 /*         <ul class="boxContainer">
            <div>{this.state.items}</div>
           <li> <Box /> </li>
           <li> <Box /> </li>
         </ul>
        );
      }
}*/
