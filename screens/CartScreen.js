import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { isMobile } from 'react-device-detect';
import {Select, MenuItem} from '@material-ui/core';

function CartScreen(props) {
  const cart = useSelector((state) => state.cart);

  const { cartItems, error } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, dispatch, qty]);

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
/**********************MOBILE VIEW***********************/
if (isMobile) {
return (
  <div className="row top">
    <div className="col-2">
      <h1>Shopping Cart</h1>
      {error && <MessageBox variant="danger">{error}</MessageBox>}

      {cartItems.length === 0 ? (
        <div>
          Your Shopping Cart is empty. 
          <img src="/images/shopnow.png" className="Cart_001"/>
          <button className="Shopnow">
          <Link to="/" style={{color: "#000"}}>SHOP NOW</Link>
          </button>
        </div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <div className="row_Cart">
                <div>
                  <img src={item.image} alt={item.name} className="smaller" />
                  <Link to={`/product/${item.product}`} style={{color: "#000", width: "45%"}}>{item.name}</Link>

                </div>

                <div>
                 QTY: <Select style={{fontSize: '15px',fontWeight: 500}} 
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <MenuItem style={{fontSize: '15px'}} key={x + 1} value={x + 1}>
                        {x + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div className="pricerA1"> Rs.{item.price} </div>
                <div>
                  <button
                    type="button"
                    className="Cart_Mobile"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
        <ul>
          <li>
            <h52>
              Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : Rs.
              {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h52>
          </li>
          <li>
            <button
              type="button"
              onClick={checkoutHandler}
              className="checkout1"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </li>
        </ul>
      </div>
);
}

/***********************DESKTOP*********************/
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} className="small" />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                
                  <div>
                    <Select 
                    style={{fontSize: '15px'}}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <MenuItem style={{fontSize: '15px'}} key={x + 1} value={x + 1}>
                          {x + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <div className="pricer"> Rs.{item.price} </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : Rs.
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="checkout"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;



// WEBPACK FOOTER //
// ./src/screens/CartScreen.js