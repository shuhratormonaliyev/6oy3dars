import React, { useState } from 'react';

const SocialMediaPost = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Social Media Post</h1>
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <button onClick={() => setLikes(likes + 1)} style={styles.button}>Like</button>
      <button onClick={() => setDislikes(dislikes + 1)} style={styles.button}>Dislike</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default SocialMediaPost;
