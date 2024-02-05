import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { addPost } from '../APIManagers/PostManager';
import { useNavigate } from "react-router-dom";

export const PostForm = () => {

    const [postEntry, setPostEntry] = useState({
        Title: "",
        ImageUrl: "",
        Caption: "",
        UserProfileId: "",
        DateCreated: new Date(),
    })

    const handleControlledInputChange = (e) => {

        const newPostEntry = { ...postEntry }

        newPostEntry[`${e.target.name}`] = e.target.value

        setPostEntry(newPostEntry)
    }

    const updatePostState = () => {
        // Fetch the updated list of posts from the backend or update the existing state
        // Example: You can fetch the updated list of posts from the backend and set it as the new state
        fetch('/api/posts') // Assuming this endpoint retrieves all posts
            .then(response => response.json())
            .then(postsData => {
                // Update the component state with the new list of posts
                setPostEntry(postsData); // Assuming setPosts is your state update function
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    };

    const navigate = useNavigate();

    const saveEntry = (e) => {
        e.preventDefault()

        const entryToSend = {
            ...postEntry,
            DateCreated: new Date()
        }
        entryToSend.UserProfileId = 1

        addPost(entryToSend)
            .then((p) => {
                // Navigate the user back to the home route
                navigate("/");
            })

            .then(setPostEntry({
                Title: "",
                ImageUrl: "",
                Caption: "",
                DateCreated: new Date(),
                UserProfileId: 1,
            }))

            .then(updatePostState)

            .catch(error => {
                console.error('Error adding post:', error);
                // Handle errors here, such as displaying an error message to the user
            });
    }

return (

    <form id="postForm" onSubmit={saveEntry}>
        <div className="field">
            <label className="label">Title</label>
            <div className="control">
                <input name="Title" className="input" type="text" placeholder="Title of Post" value={postEntry.Title} onChange={handleControlledInputChange} />
            </div>
        </div>
        <div className="field">
            <label className="label">Image Url</label>
            <div className="control">
                <input className="input" type="text" name="ImageUrl" value={postEntry.ImageUrl} onChange={handleControlledInputChange} />
            </div>
        </div>
        <div className="field">
            <label className="label">Caption</label>
            <div className="control">
                <textarea name="Caption" className="text" placeholder="Enter a caption" value={postEntry.Caption} onChange={handleControlledInputChange}></textarea>
            </div>
        </div>
        <div className="control">
            <button id="submitbutton" type="submit" className="button is-primary" onClick={saveEntry}>Submit</button>
        </div>

    </form>

)
}

export default PostForm;