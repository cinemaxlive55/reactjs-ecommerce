import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';
import { isMobile } from 'react-device-detect';

export default function OrderListScreen(props) {
const sellerMode = props.match.path.indexOf('/seller') >= 0;
const orderList = useSelector((state) => state.orderList);
const { loading, error, orders } = orderList;
const orderDelete = useSelector((state) => state.orderDelete);
const {
loading: loadingDelete,
error: errorDelete,
success: successDelete,
} = orderDelete;
const cart = useSelector((state) => state.cart);

const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
const dispatch = useDispatch();
useEffect(() => {
dispatch({ type: ORDER_DELETE_RESET });
dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' }));
}, [dispatch, sellerMode, successDelete, userInfo._id]);
const deleteHandler = (order) => {
if (window.confirm('Are you sure to delete?')) {
  dispatch(deleteOrder(order._id));
}
};
if (isMobile) {
  return (
    <div>
    <div className="orderlist" style={{marginTop: "0rem"}}>
      <h1>Orders</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
       <div>
          {orders.map((order) => (
          <div key={order._id}>
          <ul>
            {order.orderItems.map((item) => (
              <li key={item.product}>
              </li>
            ))}
        </ul>
        <div className="CARD_001">
          <ul>
          {order.orderItems.map((item) => (
          <div key={item.product} className="orderlist_name">
              <div>
               <img
              src={item.image}
              alt={item.name}
              className="purchase_image"
            ></img>
          </div>
             {item.name} <strong>( {item.qty} )</strong>  
          </div>
    
          ))}
           <div className="Purchase"> 
          <strong>PURCHASE DATE:</strong>{order.createdAt.substring(0, 10)}
          <p><strong>ORDER ID:</strong>{order._id}</p>
          <p><strong>PRICE:</strong>{order.totalPrice.toFixed(2)}</p>
           <p><strong>PAYMENT METHOD: </strong>{order.paymentMethod}</p>
             </div>
             <div className="Purchase2"> 
             {order.isPaid ? (
                      <MessageBox variant="success">
                        Payment Successfully completed !!
                       </MessageBox>
                    ) : (
                      <MessageBox variant="danger">Payment to be done</MessageBox>
                    )}
             {order.isDelivered ? (
                      <MessageBox variant="success">
                       Fulfilled in AMIMON
                      </MessageBox>
                    ) : (
                      <MessageBox variant="danger">Delivery in progress</MessageBox>
                    )}
             </div>
          <div className="Purchase1"> <strong>Address: </strong> {order.shippingAddress.address},
            {order.shippingAddress.city},{' '}
            {order.shippingAddress.postalCode},
            {order.shippingAddress.country}
            </div>
           <button
          type="button"
          className="small"
          onClick={() => {
            props.history.push(`/order/${order._id}`);
          }}
          >
          Details
          </button>
          <button
          type="button"
          className="small"
          onClick={() => deleteHandler(order)}
          >
          Delete
          </button>
          </ul>
          </div>
          </div>
          ))}
          </div>
          )}
          </div>
          </div>
      );
}
return (
<div>
<div className="orderlist">
  <h1>Orders</h1>
  {loadingDelete && <LoadingBox></LoadingBox>}
  {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
  {loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
   <div>
      {orders.map((order) => (
      <div key={order._id}>
      <ul>
        {order.orderItems.map((item) => (
          <li key={item.product}>
          </li>
        ))}
    </ul>
    <div className="CARD_001">
      <ul>
      {order.orderItems.map((item) => (
      <div key={item.product} className="orderlist_name">
          <div>
           <img
          src={item.image}
          alt={item.name}
          className="purchase_image"
        ></img>
      </div>
         {item.name} <strong>( {item.qty} )</strong>  
      </div>

      ))}
       <div className="Purchase"> 
      <strong>PURCHASE DATE:</strong>{order.createdAt.substring(0, 10)}
      <p><strong>ORDER ID:</strong>{order._id}</p>
      <p><strong>PRICE:</strong>{order.totalPrice.toFixed(2)}</p>
       <p><strong>PAYMENT METHOD: </strong>{order.paymentMethod}</p>
         </div>
         <div className="Purchase2"> 
         {order.isPaid ? (
                  <MessageBox variant="success">
                    Payment Successfully completed !!
                   </MessageBox>
                ) : (
                  <MessageBox variant="danger">Payment to be done</MessageBox>
                )}
         {order.isDelivered ? (
                  <MessageBox variant="success">
                   Fulfilled in AMIMON
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Delivery in progress</MessageBox>
                )}
         </div>
      <div className="Purchase1"> <strong>Address: </strong> {order.shippingAddress.address},
        {order.shippingAddress.city},{' '}
        {order.shippingAddress.postalCode},
        {order.shippingAddress.country}
        </div>
       <button
      type="button"
      className="small"
      onClick={() => {
        props.history.push(`/order/${order._id}`);
      }}
      >
      Details
      </button>
      <button
      type="button"
      className="small"
      onClick={() => deleteHandler(order)}
      >
      Delete
      </button>
      </ul>
      </div>
      </div>
      ))}
      </div>
      )}
      </div>
      </div>
  );
}




// WEBPACK FOOTER //
// ./src/screens/OrderListScreen.js