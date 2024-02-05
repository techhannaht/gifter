import React, { useState } from 'react';
import PostList from "./PostList";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  fetch(`https://localhost:5001/api/Post/search?q=${query}&sortDesc=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Check if data is not empty before handling it
      if (data) {
        setSearchResults(data);
        // Handle the data
      } else {
        PostList();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul className="list-group">
            {searchResults.map(post => (
              <Card className="m-4">
              <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
              <CardImg top src={post.imageUrl} alt={post.title} style={{ width: '200px' }} />
              <CardBody>
                <p>
                  <Link to={`/posts/${post.id}`}>
                  <strong>{post.title}</strong>
                  </Link>
                </p>
                <p>{post.caption}</p>
              </CardBody>
            </Card>
            ))}
          </ul>
        ) : (
          <p>Search for a post above</p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
