import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="carderr">
      <Link to={`/product/${product._id}`}>
        <img className="mediumm" src={product.image} alt={product.name} />
      </Link>
      <div className="carderr-body">
        <Link to={`/product/${product._id}`}>
          <h67>{product.name}</h67>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">Rs.{product.price}</div>
        </div>
      </div>
    </div>
  );
}



// WEBPACK FOOTER //
// ./src/components/Product.js