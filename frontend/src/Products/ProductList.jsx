import React from 'react';
import Product from './Product';
import './style.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <ImageList sx={{ width: '100%', height: '100%' }} gap={8} cols={3}>
        {products.map((product, index) => (
          <ImageListItem key={index}>
            <Link to={product.URL} className={product.cName}>
              <Product
                title={product.title}
                img={product.img}
                price={product.price}
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ProductList;
