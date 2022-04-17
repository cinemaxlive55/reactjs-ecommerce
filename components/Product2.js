import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product2(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card-mobile1">
      <Link to={`/product/${product._id}`}>
        <img className="medium2" src={product.image} alt={product.name} />
      </Link>
      <div className="card-mobile1-body">
        <Link to={`/product/${product._id}`}>
          <h69>{product.name}</h69>
      <div className="img-brand">by {product.brand}</div>

        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
          <div className="price-mobile1">Rs.{product.price} <del2>Rs.{product.mrp}</del2> ({product.discount}%)</div>
          <div className="prices">Save Rs.{product.mrp-product.price}</div>

      </div>
    </div>
  );
}


// WEBPACK FOOTER //
// ./src/components/Product2.js