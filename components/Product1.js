import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product1(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card-mobile">
      <Link to={`/product/${product._id}`}>
        <img className="medium1" src={product.image} alt={product.name} />
      </Link>
      <div className="card-mobile-body">
        <Link to={`/product/${product._id}`}>
          <h67>{product.name}</h67>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row-mobile">
          <div className="price-mobile">Rs.{product.price}</div>
        </div>
      </div>
    </div>
  );
}


// WEBPACK FOOTER //
// ./src/components/Product1.js