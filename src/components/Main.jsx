import React from 'react';
import './Main.css';
import Card from './Card';

const Main = ({ books }) => {
  return (
    <div className="main">
      {books.length === 0 ? (
        <div className="main-title">
          <div>
            Nothing <br />
            To<br />
            Show!?
            <br />
          </div>
        </div>
      ) : (
        <div>
          {books.map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
