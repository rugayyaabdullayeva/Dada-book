import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const BookCard = ({ book }) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.smallThumbnail} />}
      >
        <Meta title={book.volumeInfo.title} description={book.volumeInfo.previewLink} />
      </Card>
    </div>
  );
};

export default BookCard;
