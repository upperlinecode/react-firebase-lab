import React from 'react';
import firebase from "./Firestore";
import Post from "./Post.js";

const Posts = () => {
  const component = new React.Component();
  
  component.componentDidMount = () => {
    try {
      let documentToRead = firebase.firestore().collection('board').doc('1');
      let getDoc = documentToRead.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            // Do something with the data here
            console.log(doc.data())
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });
        
        
    } catch(err) {
      // catches errors in any of the await statements in try {}
      alert(err);
    }
  }

  component.render = () => {
    // Render the posts based on the state of each
    return (
      <div className="Posts">
        
        <p>List of posts</p>
        
      </div>
    )
  }

  return component
}

export default Posts;
