import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      if (user.seller) {
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          password,
          sellerName,
          sellerLogo,
          sellerDescription,
        })
      );
    }
  };

  if(isMobile){
    return (
      <div>
        <form className="form1A" onSubmit={submitHandler}>
            <h3o>USER PROFILE UPDATE / EDIT</h3o>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile Updated Successfully
                </MessageBox>
              )}
              <div style={{marginTop: "2rem"}}>
                <label htmlFor="name">Name</label>
                 <TextField 
                  style={{width: 350, marginRight: '500px'}}
                  inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
              </div>
              <div style={{marginTop: "2rem"}}>
                <label htmlFor="email">Email</label>
                 <TextField 
                   style={{width: 350, marginRight: '500px'}}
                   inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
              </div>
              <div style={{marginTop: "2rem"}}>
                <label htmlFor="password">Password</label>
                 <TextField 
                   style={{width: 350, marginRight: '500px'}}
                   inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
              </div>
              <div style={{marginTop: "2rem"}}>
                <label htmlFor="confirmPassword">confirm Password</label>
                  <TextField 
                  style={{width: 350, marginRight: '500px'}}
                  inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></TextField>
              </div>
              {user.isSeller && (
                <div>
                  <h2>Seller</h2>
                  <div>
                    <label htmlFor="sellerName">Seller Name</label>
                    <TextField
                      style={{width: 350, marginRight: '500px'}}
                      inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                      id="sellerName"
                      type="text"
                      placeholder="Enter Seller Name"
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                    ></TextField>
                  </div>
                  <div>
                    <label htmlFor="sellerLogo">Seller Logo</label>
                      <TextField 
                    style={{width: 350, marginRight: '500px'}}
                    inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                      id="sellerLogo"
                      type="text"
                      placeholder="Enter Seller Logo"
                      value={sellerLogo}
                      onChange={(e) => setSellerLogo(e.target.value)}
                    ></TextField>
                  </div>
                  <div>
                    <label htmlFor="sellerDescription">Seller Description</label>
                     <TextField 
                    style={{width: 350, marginRight: '500px'}}
                    inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
                      id="sellerDescription"
                      type="text"
                      placeholder="Enter Seller Description"
                      value={sellerDescription}
                      onChange={(e) => setSellerDescription(e.target.value)}
                    ></TextField>
                  </div>
                </div>
              )}
              <div>
                <label />
                <button className="profile" type="submit">
                  Update
                </button>
              </div>
            </div>
          )}
          
        </form>
      </div>
    );
  }
  return (
    <div>
      <form className="form1" onSubmit={submitHandler}>
        <div>
          <h1>USER PROFILE UPDATE / EDIT</h1>
        </div>
        <div className="column">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profile Updated Successfully
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Name</label>
               <TextField 
                   style={{width: 400}}
                inputProps={{ style: { height: 19, width: 400, fontSize: '15px', border: 'none' } }}
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </div>
            <div>
              <label htmlFor="email">Email</label>
               <TextField 
                   style={{width: 400}}
                inputProps={{ style: { height: 19, width: 400, fontSize: '15px', border: 'none' } }}
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </div>
            <div>
              <label htmlFor="password">Password</label>
               <TextField 
                   style={{width: 400}}
                inputProps={{ style: { height: 19, width: 400, fontSize: '15px', border: 'none' } }}
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </div>
            <div>
              <label htmlFor="confirmPassword">confirm Password</label>
                <TextField 
                   style={{width: 400}}
                inputProps={{ style: { height: 19, width: 400, fontSize: '15px', border: 'none' } }}
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>
            </div>
            {user.isSeller && (
              <div>
                <h2>Seller</h2>
                <div>
                  <label htmlFor="sellerName">Seller Name</label>
                  <TextField
                    id="sellerName"
                    type="text"
                    placeholder="Enter Seller Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                  ></TextField>
                </div>
                <div>
                  <label htmlFor="sellerLogo">Seller Logo</label>
                    <TextField 
                   style={{width: 400}}
                inputProps={{ style: { height: 19, width: 400, fontSize: '15px', border: 'none' } }}
                    id="sellerLogo"
                    type="text"
                    placeholder="Enter Seller Logo"
                    value={sellerLogo}
                    onChange={(e) => setSellerLogo(e.target.value)}
                  ></TextField>
                </div>
                <div>
                  <label htmlFor="sellerDescription">Seller Description</label>
                   <TextField 
                   style={{width: 400}}
                inputProps={{ style: { height: 19, width: 400, fontSize: '15px', border: 'none' } }}
                    id="sellerDescription"
                    type="text"
                    placeholder="Enter Seller Description"
                    value={sellerDescription}
                    onChange={(e) => setSellerDescription(e.target.value)}
                  ></TextField>
                </div>
              </div>
            )}
            <div>
              <label />
              <button className="profile" type="submit">
                Update
              </button>
            </div>
          </div>
        )}
      </div>
      </form>
    </div>
  );
}


// WEBPACK FOOTER //
// ./src/screens/ProfileScreen.js