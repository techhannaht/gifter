import React, { useState, useEffect } from "react";
import { getAllPostsWithComments } from "../APIManagers/PostManager";
import { Post } from "./Post";
import {deletePost} from "../APIManagers/PostManager";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getAllPostsWithComments().then(allPosts => setPosts(allPosts)); 
  };

  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <Post key={post.id} post={post} deletePost={deletePost} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;