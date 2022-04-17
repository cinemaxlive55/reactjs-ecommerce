import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { isMobile } from 'react-device-detect';
export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
 
if (isMobile) {
    return (
      <div>
  <div className="orderlist_Mobile">
    <h2o>YOUR ORDERS</h2o>
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
         <div className="PurchaseA"> 
        <strong>PURCHASE DATE:</strong>{order.createdAt.substring(0, 10)}
        <p><strong>PRICE:</strong>{order.totalPrice.toFixed(2)}</p>
         <p><strong>PAYMENT METHOD: </strong>{order.paymentMethod}</p>
           </div>
           <div className="Purchase1"> <strong>Address: </strong> {order.shippingAddress.address},
          {order.shippingAddress.city},{' '}
          {order.shippingAddress.postalCode},
          {order.shippingAddress.country}
          </div>
           <div className="Purchase3"> 
           {order.isPaid ? (
                    <MessageBox variant="success">
                      Payment Successfully completed !!
                     </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Payment to be done</MessageBox>
                  )}
           {order.isDelivered ? (
                    <MessageBox variant="success">
                     Fulfilled by AMIMON
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Delivery in Progress</MessageBox>
                  )}
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
<h1o>YOUR ORDERS</h1o>
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
                 Fulfilled by AMIMON
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Delivery in Progress</MessageBox>
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
// ./src/screens/OrderHistoryScreen.js