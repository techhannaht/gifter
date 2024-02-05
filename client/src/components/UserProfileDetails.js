import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getPost, getUserProfileWithPosts } from "../APIManagers/PostManager";
import { useParams } from "react-router-dom";
import { UserProfile } from "./UserProfile";

export const UserProfileDetails = () => {
  const [userProfile, setUserProfile] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUserProfileWithPosts(id).then(setUserProfile);
  }, []);

  if (!userProfile) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <UserProfile userProfile={userProfile} />
          <ListGroup>
            {userProfile.Posts?.map((u) => (
              <ListGroupItem>{u.post}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;