import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (data) => {
    setBooks(data);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Main books={books} />
    </div>
  );
}

export default App;
