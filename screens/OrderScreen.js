import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import { isMobile } from 'react-device-detect';
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export default function OrderScreen(props) {
    const [name, setName] = useState('Amimon')
  
    async function displayRazorpay() {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }
  
      const data = await fetch('https://amimon.in/api/razorpay?amount='+ order.totalPrice.toFixed(2), { method: 'POST'}).then((t) =>
        t.json()
      )
      console.log(data)
      const options = {
        key:'rzp_live_N2JG3naucelJHr',
        currency: data.currency,
        amount: order.totalPrice.toFixed(2),
        order_id: data.id,
        name: 'Order Payment',
        description: 'Thank you for purchasing with Amimon. Pls, come again!',
        handler: function (response) {
          alert('Thank you for your purchase. Your product shall be delivered between 7 working days')
        },
        prefill: {
          name,
          email: '',
          phone_number: ''
        }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
    }
  }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);
 
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  if (!order || order.isPaid == true) {
    return loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <h1oo>Order Placed Successfully!</h1oo>
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                
                  <h2>Shipping Address</h2>
                  <p>
                    <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                    <strong>Address: </strong> {order.shippingAddress.address},
                    {order.shippingAddress.city},{' '}
                    {order.shippingAddress.postalCode},
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <MessageBox variant="success">
                      Delivered successfully
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Not Delivered</MessageBox>
                  )}
                
              </li>
              <li>
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong> {order.paymentMethod}
                  </p>
               
                  {order.isPaid ? (
                    <MessageBox variant="success">
                      Payment Successfully completed !!
                     </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Payment to be done</MessageBox>
                  )}
                  </li>
              <li>
                  <h2>Order Items</h2>
                  <ul>
                    {order.orderItems.map((item) => (
                      <li key={item.product}>
                        <div className="row">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="small"
                            ></img>
                          </div>
                          <div className="min-30">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>
  
                          <div>
                            SUBTOTAL:({item.qty})  Rs.{item.price} = Rs.{item.qty * item.price}
                          </div>
  
                        </div>
                      </li>
                    ))}
                  </ul>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div className="row">
                    <div>Items</div>
                    <div>Rs.{order.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
               
                <li>
                  <div className="row">
                    <div>Shipping</div>
                    <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
             
                  <li>
                  <div className="row">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
               
                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                  <li>
                    {loadingDeliver && <LoadingBox></LoadingBox>}
                    {errorDeliver && (
                      <MessageBox variant="danger">{errorDeliver}</MessageBox>
                    )}
                    <button
                      type="button"
                      className="deliver"
                      onClick={deliverHandler}
                    >
                      Deliver Order
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if ( isMobile , !order || order.isPaid == true) {
    return loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
        <h1oo>Order Placed Successfully!</h1oo>
        <div className="row top">
          <div className="col-2">
            <ul>
              <li>
                
                  <h2>Shipping Address</h2>
                  <p>
                    <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                    <strong>Address: </strong> {order.shippingAddress.address},
                    {order.shippingAddress.city},{' '}
                    {order.shippingAddress.postalCode},
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <MessageBox variant="success">
                      Delivered successfully
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Not Delivered</MessageBox>
                  )}
                
              </li>
              <li>
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong> {order.paymentMethod}
                  </p>
               
                  {order.isPaid ? (
                    <MessageBox variant="success">
                      Payment Successfully completed !!
                     </MessageBox>
                  ) : (
                    <MessageBox variant="danger">Payment to be done</MessageBox>
                  )}
                  </li>
              <li>
                  <h2>Order Items</h2>
                  <ul>
                    {order.orderItems.map((item) => (
                      <li key={item.product}>
                        <div className="row">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="small"
                            ></img>
                          </div>
                          <div className="min-30">
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </div>
  
                          <div>
                            SUBTOTAL:({item.qty})  Rs.{item.price} = Rs.{item.qty * item.price}
                          </div>
  
                        </div>
                      </li>
                    ))}
                  </ul>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div className="row">
                    <div>Items</div>
                    <div>Rs.{order.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
               
                <li>
                  <div className="row">
                    <div>Shipping</div>
                    <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
             
                  <li>
                  <div className="row">
                    <div>
                      <strong> Order Total</strong>
                    </div>
                    <div>
                      <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
               
                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                  <li>
                    {loadingDeliver && <LoadingBox></LoadingBox>}
                    {errorDeliver && (
                      <MessageBox variant="danger">{errorDeliver}</MessageBox>
                    )}
                    <button
                      type="button"
                      className="deliver"
                      onClick={deliverHandler}
                    >
                      Deliver Order
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

if (isMobile) {
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1oo>Order Placed Successfully!</h1oo>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              
                <hoo>Shipping Details</hoo>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                   Delivered successfully
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Delivery in Progress</MessageBox>
                )}
              
            </li>
            <li>
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
             
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Payment Successfully completed !!
                   </MessageBox>
                ) : (
                  <MessageBox variant="danger">Payment to be done</MessageBox>
                )}
                </li>
            <li>
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          SUBTOTAL:({item.qty})  Rs.{item.price} = Rs.{item.qty * item.price}
                        </div>

                      </div>
                    </li>
                  ))}
                </ul>
            </li>
          </ul>
        </div>
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>Rs.{order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
             
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
           
                <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <a
					className="App-link"
					onClick={displayRazorpay}
					target="_blank"
          amount={order.totalPrice.toFixed(2)}
					rel="noopener noreferrer"
				>
				 <button className="Pay_B001">PAY NOW</button>
				</a>
              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <button
                    type="button"
                    className="deliver"
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
  );
}
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order Placed Successfully!</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                   Delivered successfully
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Delivery in Progress</MessageBox>
                )}
              
            </li>
            <li>
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
             
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Payment Successfully completed !!
                   </MessageBox>
                ) : (
                  <MessageBox variant="danger">Payment to be done</MessageBox>
                )}
                </li>
            <li>
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          SUBTOTAL:({item.qty})  Rs.{item.price} = Rs.{item.qty * item.price}
                        </div>

                      </div>
                    </li>
                  ))}
                </ul>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>Rs.{order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
             
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
           
                <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <a
					className="App-link"
					onClick={displayRazorpay}
					target="_blank"
          amount={order.totalPrice.toFixed(2)}
					rel="noopener noreferrer"
				>
				 <button className="Pay_B001">PAY NOW</button>
				</a>
              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <button
                    type="button"
                    className="deliver"
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}



// WEBPACK FOOTER //
// ./src/screens/OrderScreen.js