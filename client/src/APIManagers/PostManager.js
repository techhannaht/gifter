const baseUrl = '/api/post';
const userUrl = '/api/userprofile';

export const getAllPosts = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const getAllPostsWithComments = () => {
  return fetch('https://localhost:5001/api/Post/GetWithComments')
    .then((res) => res.json())
};


export const addPost = (singlePost) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};


export const getPost = (id, updatePostState) => {
  return fetch(`https://localhost:5001/api/Post/${id}`).then((res) => res.json())
  .then(updatePostState)
};

export const deletePost = (id, updatePostState) => {
  return fetch(`https://localhost:5001/api/Post/${id}`, { method: "DELETE" })
    .then(updatePostState)
}

export const getAllUserProfiles = () => {
  return fetch(`https://localhost:5001/api/UserProfile`)
    .then((res) => res.json())
};

export const getUserProfileWithPosts = (id) => {
  return fetch(`https://localhost:5001/api/UserProfile/${id}/profile`).then((res) => res.json())
  .then()
};

export const addUserProfile = (singleUser) => {
  return fetch(userUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleUser),
  });
};

export const deleteUser = (id, updateUserProfileState) => {
  return fetch(`https://localhost:5001/api/UserProfile/${id}`, { method: "DELETE" })
    .then(updateUserProfileState)
}

