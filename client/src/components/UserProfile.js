import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload();
}

export const UserProfile = ({ userProfile, updateUserProfileState, deleteUserProfile}) => {
  return (
    <div className="container d-flex justify-content-center">
      <Card className="m-4" >
        {/* <CardImg top src={userProfile.imageUrl} alt={userProfile.name} style={{ width: '600px' }} /> */}
        <CardBody>
          <p>
            <Link to={`/userprofiles/${userProfile.id}`}>
              <strong>{userProfile.name}</strong>
            </Link>
          </p>
          <p><b>Bio:</b> {userProfile.bio}</p>
          <p>Email: {userProfile.email}</p>
        </CardBody>
        <button className="btn btn-danger" onClick={() => {deleteUserProfile(userProfile.id, updateUserProfileState); refreshPage(); }}>
          Delete
        </button>
        <p></p>
        {/* <h4> Posts: </h4>
        {userProfile.posts?.map((post, index) => (
          <Card key={index}>{post.title}
          <CardImg top src={post.imageUrl} alt={userProfile.name} style={{ width: '300px' }} />
          </Card>
        ))} */}
      </Card>
    </div>
  );
};