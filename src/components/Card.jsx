import { Card } from 'antd';
const { Meta } = Card;
import React from 'react';

const Card = ({ product }) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={product.imageLinks.smallThumbnail} />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
};
export default Card;