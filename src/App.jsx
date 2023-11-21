import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (data) => {
    setBooks(data);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Main books={books} />
      <Card/>
    </div>
  );
}

export default App;
