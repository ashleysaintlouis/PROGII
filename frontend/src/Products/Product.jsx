import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Product = ({ img, title, price }) => {
  return (
    <div className="product">
      <ImageListItem key={img}>
        <img
          srcSet={`${img}?w=248&fit=crop&auto=format`}
          src={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={title}
          loading="lazy"
        />
        <ImageListItemBar
          title={title}
          subtitle={<span>Preço: {price}</span>}
          position="below"
        />
      </ImageListItem>
    </div>
  );
};

export default Product;
