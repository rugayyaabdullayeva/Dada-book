import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&key=YOUR_GOOGLE_BOOKS_API_KEY`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      onSearch(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="img-sec">
      <div className="title">
        <h1>Dada Book Searching App</h1>
        <div className="form">
          <form onSubmit={handleSearch}>
            <input
              placeholder="Find book"
              className=""
              value={query}
              onChange={handleInputChange}
            />
            <button type="submit">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="sc-dJjYzT kBkKjn"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
