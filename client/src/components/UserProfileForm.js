import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addUserProfile } from '../APIManagers/PostManager';

export const UserProfileForm = () => {

    const [userProfileEntry, setuserProfileEntry] = useState({
        Name: "",
        ImageUrl: "",
        Email: "",
        Bio: "",
        DateCreated: new Date(),
    })

    const handleControlledInputChange = (e) => {

        const newuserProfileEntry = { ...userProfileEntry }

        newuserProfileEntry[`${e.target.name}`] = e.target.value

        setuserProfileEntry(newuserProfileEntry)
    }

    const updateUserProfileState = () => {
        // Fetch the updated list of userProfiles from the backend or update the existing state
        // Example: You can fetch the updated list of userProfiles from the backend and set it as the new state
        fetch('https://localhost:5001/api/UserProfile') // Assuming this endpoint retrieves all userProfiles
            .then(response => response.json())
            .then(userProfilesData => {
                // Update the component state with the new list of userProfiles
                setuserProfileEntry(userProfilesData); // Assuming setuserProfiles is your state update function
            })
            .catch(error => {
                console.error('Error fetching User Profiles:', error);
            });
    };

    const navigate = useNavigate();

    const saveEntry = (e) => {
        e.preventDefault()

        const entryToSend = {
            ...userProfileEntry,
            DateCreated: new Date()
        }
        entryToSend.UserProfileId = 1

        addUserProfile(entryToSend)
            .then((p) => {
                // Navigate the user back to the home route
                navigate("/");
            })

            .then(setuserProfileEntry({
                Name: "",
                ImageUrl: "",
                Email: "",
                Bio: "",
                DateCreated: new Date(),
            }))

            .then(updateUserProfileState)

            .catch(error => {
                console.error('Error adding userProfile:', error);
                // Handle errors here, such as displaying an error message to the user
            });
    }

return (

    <form id="userProfileForm" onSubmit={saveEntry}>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input name="Name" className="input" type="text" placeholder="Name of userProfile" value={userProfileEntry.Name} onChange={handleControlledInputChange} />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="text" name="Email" value={userProfileEntry.Email} onChange={handleControlledInputChange} />
            </div>
        </div>
        <div className="field">
            <label className="label">Bio</label>
            <div className="control">
                <textarea name="Bio" className="text" placeholder="Enter a Bio" value={userProfileEntry.Bio} onChange={handleControlledInputChange}></textarea>
            </div>
        </div>
        <div className="field">
            <label className="label">Image Url</label>
            <div className="control">
                <textarea name="ImageUrl" className="text" placeholder="Enter a ImageUrl" value={userProfileEntry.ImageUrl} onChange={handleControlledInputChange}></textarea>
            </div>
        </div>
        <div className="control">
            <button id="submitbutton" type="submit" className="button is-primary" onClick={saveEntry}>Submit</button>
        </div>

    </form>

)
}

export default UserProfileForm;