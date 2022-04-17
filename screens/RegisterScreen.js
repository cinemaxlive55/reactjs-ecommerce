import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import TextField from '@material-ui/core/TextField';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
    } else {
      dispatch(register(name, email, phoneno, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form1A" onSubmit={submitHandler}>
        <div>
          <h3o>Create Account</h3o>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div style={{ marginTop: "3rem"}}>
          <label htmlFor="name">Name</label>
          <TextField
           style={{width: 350, marginRight: '500px'}}
           inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></TextField>
        </div>
        <div style={{ marginTop: "2rem"}}>
          <label htmlFor="phoneno">Phone Number</label>
          <TextField
             style={{width: 350, marginRight: '500px'}}
             inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
            type="text"
            id="phone number"
            placeholder="Enter phone number"
            required
            onChange={(e) => setphoneno(e.target.value)}
          ></TextField>
        </div>
        <div style={{ marginTop: "2rem"}}>
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
        <div style={{ marginTop: "2rem"}}>
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
        <div style={{ marginTop: "2rem"}}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <TextField
             style={{width: 350, marginRight: '500px'}}
             inputProps={{ style: { height: 19, width: 350, fontSize: '15px', border: 'none' } }}
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></TextField>
        </div>
        <div>
          <label />
          <button className="signin" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}


// WEBPACK FOOTER //
// ./src/screens/RegisterScreen.js