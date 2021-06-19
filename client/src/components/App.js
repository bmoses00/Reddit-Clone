import React from 'react'
import Posts from './Posts'
import PostWrapper from './PostWrapper'
import { useState, useEffect } from 'react'

function App() {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPostsData(data);
      });
  }, []);
  const [focus, setFocus] = useState(null);
  if (postsData.length !== 0)
    return (
      (focus === null)
      ? <Posts 
          postsData={postsData} 
          setFocus={setFocus}/>
      : <PostWrapper 
          className='center'
          postData={postsData.filter((post) => focus === post._id)[0]} 
          setFocus={setFocus}/>
    )
    
  else 
      return <h2>Loading...</h2>
};

export default App

// @TODO:
// figure out how to use font awesome