import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('Others');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        
        <div>
          <div>
            <input
              type="radio"
              id="Cash on Delivery"
              value="Cash on Delivery"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="Cash on Delivery">Cash on Delivery</label>
          </div>
        </div>
        <div>     
    </div>
    <div>
     
    <div>
      <input
        type="radio"
        id="Online Payment"
        value="Online Payment"
        name="paymentMethod"
        onChange={(e) => setPaymentMethod(e.target.value)}
      ></input>
      <label htmlFor="Online Payment">Online Payment</label>
    </div>
  </div>
  <div>
  </div>
  <label />
  <button className="paymentmethod" type="submit">
            Continue
          </button>
</form>
</div>
  );
}




// WEBPACK FOOTER //
// ./src/screens/PaymentMethodScreen.js