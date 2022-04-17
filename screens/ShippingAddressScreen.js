import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import TextField from '@material-ui/core/TextField';
import { isMobile } from 'react-device-detect';
export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    let moveOn = true;
  
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          mobile,
          address,
          city,
          postalCode,
          country,
          lat: newLat,
          lng: newLng,
        })
      );
      props.history.push('/payment');
    }
  };

if (isMobile) {
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form_Mobile" onSubmit={submitHandler}>
        <div>
          <h1oo>Shipping Address</h1oo>
        </div>
       
       <div className="column_Mobile">
       <div>
          <label htmlFor="fullName">Full Name</label>
          <TextField  
          style={{width: '250px'}}
          inputProps={{ style: { height: 19, width: 250, fontSize: '15px', border: 'none' } }}
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></TextField >
        </div>
        <div>
          <label htmlFor="mobile">Phone Number</label>
          <TextField  
          style={{width: '250px'}}
          inputProps={{ style: { height: 19, width: 250, fontSize: '15px', border: 'none' } }}
            type= "text"
            pattern="\d*"
            id="mobile"
            minLength="10"
            maxLength="10"
            placeholder="Enter mobile number"
            required
            onChange={(e) => setMobile(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <TextField  
          style={{width: '250px'}}
          inputProps={{ style: { height: 19, width: 250, fontSize: '15px', border: 'none' } }}
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></TextField >
        </div>
       </div>
        
        <div className="column2_Mobile">
        <div>
          <label htmlFor="city">City</label>
          <TextField  
          style={{width: '250px'}}
          inputProps={{ style: { height: 19, width: 250, fontSize: '15px', border: 'none' } }}
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></TextField >
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <TextField  
          style={{width: '250px'}}
          inputProps={{ style: { height: 19, width: 250, fontSize: '15px', border: 'none' } }}
             type= "text"
             pattern="\d*"
            placeholder="Enter your Postal code"
             id="mobile"
             minlength="6"
             maxLength="6"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></TextField >
         
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <TextField  
          style={{width: '250px'}}
          inputProps={{ style: { height: 19, width: 250, fontSize: '15px', border: 'none' } }}
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></TextField >
        </div>
        </div>
        <div>
          <label />
          <button className="shipping_Mobile" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form1" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
       
       <div className="column">
       <div>
          <label htmlFor="fullName">Full Name</label>
          <TextField  
          style={{width: '300px'}}
          inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></TextField >
        </div>
        <div>
          <label htmlFor="mobile">Phone Number</label>
          <TextField  
          style={{width: '300px'}}
          inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            type= "text"
            pattern="\d*"
            id="mobile"
            minLength="10"
            maxLength="10"
            placeholder="Enter mobile number"
            required
            onChange={(e) => setMobile(e.target.value)}
          ></TextField >
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <TextField  
          style={{width: '300px'}}
          inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></TextField >
        </div>
       </div>
        
        <div className="column2">
        <div>
          <label htmlFor="city">City</label>
          <TextField  
          style={{width: '300px'}}
          inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></TextField >
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <TextField  
          style={{width: '300px'}}
          inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
             type= "text"
             pattern="\d*"
             id="mobile"
             minlength="6"
             maxLength="6"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></TextField >
         
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <TextField  
          style={{width: '300px'}}
          inputProps={{ style: { height: 19, width: 300, fontSize: '15px', border: 'none' } }}
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></TextField >
        </div>
        </div>
        <div>
          <label />
          <button className="shipping" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}


// WEBPACK FOOTER //
// ./src/screens/ShippingAddressScreen.js