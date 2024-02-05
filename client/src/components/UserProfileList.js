import React, { useState, useEffect } from "react";
import {getAllUserProfiles} from "../APIManagers/PostManager";
import {UserProfile} from "./UserProfile";
import {deleteUser} from "../APIManagers/PostManager";

const UserProfileList = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  const getUserProfiles = () => {
    getAllUserProfiles().then(allUserProfiles => setUserProfiles(allUserProfiles)); 
  };

  useEffect(() => {
    getUserProfiles(); }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
        {userProfiles.map((userProfile) => (
            <UserProfile key={userProfile.id} userProfile={userProfile} deleteUser={deleteUser} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileList;