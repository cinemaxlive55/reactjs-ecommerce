import React from 'react';
import { isMobile } from 'react-device-detect';
export default function CheckoutSteps(props) {
  if (isMobile) {
    return (
      <div className="row-2_Mobile checkout-steps">
        <div className={props.step1 ? 'active' : ''}>Sign-In</div>
        <div className={props.step2 ? 'active' : ''}>Shipping</div>
        <div className={props.step3 ? 'active' : ''}>Payment</div>
        <div className={props.step4 ? 'active' : ''}>Place Order</div>
      </div>
    );
  }
  return (
    <div className="row-2 checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Sign-In</div>
      <div className={props.step2 ? 'active' : ''}>Shipping</div>
      <div className={props.step3 ? 'active' : ''}>Payment</div>
      <div className={props.step4 ? 'active' : ''}>Place Order</div>
    </div>
  );
}



// WEBPACK FOOTER //
// ./src/components/CheckoutSteps.js