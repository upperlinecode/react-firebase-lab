import React from 'react';
import firebase from "./Firestore.js";


const Post = (props) => {
  const component = new React.Component();
  
  component.state = {
    user: '',
    post: '',
    voteCount: 0
  }
  
  component.componentDidMount = () => {
    // So you don't have to rewrite this each time you perform a database action
    let db = firebase.firestore();

    let postId = props.postID;
    
    // Indicate the collection and doc to retrieve, e.g. let documentToRead = db.collection('name').doc('id')
    let documentToRead = db.collection('board').doc(postId);
    
    documentToRead.get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          // Store the result from firebase in state
          component.setState({
            user: doc.data().user,
            post: doc.data().post,
            voteCount: doc.data().voteCount
          });
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }
  
  component.render = () => {
    // Render the posts based on the props
    return (
      <div className="Post">
        <p className="Text">{component.state.post}</p>
        <p className="User">{component.state.user}</p>
        <p className="VoteCount">{component.state.voteCount} vote(s)</p>
      </div>
    )
  }

  return component
}

export default Post;
