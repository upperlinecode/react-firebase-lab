import React from 'react';
import firebase from "./Firestore";


const Post = (props) => {
  const component = new React.Component();
  
  component.state = {
    user: '',
    post: '',
    voteCount: 0
  }
  
  component.componentDidMount = () => {
    try {
      // add a line here to connect to your database
      let db = firebase.firestore();

      let postId = props.postID;
      
      // add a line here to indicate the collection and doc to retrieve
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
    } catch(err) {
      console.log(err);
    }
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
