import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload();
}

export const Post = ({ deletePost, post, userProfile, updatePostState }) => {
  return (
    <div className="container d-flex justify-content-center">
      <Card className="m-4" >
        <CardImg top src={post.imageUrl} alt={post.title} style={{ width: '600px' }} />
        <CardBody>
          <p>
            <Link to={`/posts/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
          </p>
          <p><b>Caption:</b> {post.caption}</p>
          <Link to={`/userprofiles/${post.userProfile.id}`}>
          <p>Posted by: {post.userProfile.name}</p>
          </Link>
        </CardBody>
        <button className="btn btn-danger" onClick={() => { deletePost(post.id, updatePostState); refreshPage(); }}>
          Delete
        </button>
        <p></p>
        <h4> Comments </h4>
        {post.comments.map((comment, index) => (
          <Card key={index}>{comment.message}</Card>
        ))}
      </Card>
    </div>
  );
};