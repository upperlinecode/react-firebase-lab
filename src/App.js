import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Post from './Components/Post.js';

const App = () => {
  const component = new React.Component();

  let posts = [1,2,3,4].map((value) => {
    let postID = value.toString();
    return <Post postID={postID} />
  });

  component.render = () => {
    return (
      <div className="App">
        <Header />
        
        {posts}
        
        
        
        <div className="Posts">
          <p>No posts to show</p>
        </div>
        
        <Footer />
      </div>
    );
  }

  return component
}

export default App;
