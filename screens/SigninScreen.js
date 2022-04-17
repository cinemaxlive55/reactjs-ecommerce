import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  if(isMobile){
    return (
      <div>
        <form className="form1A" onSubmit={submitHandler}>
          <div>
            <h3o>SIGN IN & LET'S GET STARTED</h3o>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div style={{ marginTop: "3rem"}}>
            <label htmlFor="email">Email address</label>
            <TextField
              style={{width: 350, marginRight: '500px'}}
              inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
              type="email"
              id="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </div>
          <div style={{ marginTop: "3rem"}}>
            <label htmlFor="password">Password</label>
            <TextField
               style={{width: 350, marginRight: '500px'}}
               inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
              type="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </div>
          <div>
            <label />
            <button className="signin" type="submit">
              Sign In
            </button>
          </div>
            <label />
            <div style={{ marginTop: "1rem"}}>  
              New customer?{' '}
            <Link to={`/register?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>

        </form>
      </div>
    );
  }

  
  return (
    <div>
      <form className="form1" onSubmit={submitHandler}>
        <div>
          <h1>SIGN IN & LET'S GET STARTED</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="column">
        <div>
          <label htmlFor="email">Email address</label>
          <TextField
            style={{width: 500}}
            inputProps={{ style: { height: 19, width: 500, fontSize: '15px', border: 'none' } }}
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <TextField
            style={{width: 500}}
            inputProps={{ style: { height: 19, width: 500, fontSize: '15px', border: 'none' } }}
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </div>
        <div>
          <label />
          <button className="signin" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div> 
            New customer?{' '}
          <div className="Createaccount">
          <Link to={`/register?redirect=${redirect}`}>
              Create your account
            </Link>
          </div>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
}



// WEBPACK FOOTER //
// ./src/screens/SigninScreen.js