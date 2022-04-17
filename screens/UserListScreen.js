import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listUsers, deleteUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_DETAILS_RESET } from '../constants/userConstants';
import { isMobile } from 'react-device-detect';

function UserListScreen(props) {
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
    dispatch({ type: USER_DETAILS_RESET });
    return () => {
      //
    };
  }, [dispatch, successDelete]);

  const deleteHandler = (user) => {
    if (window.confirm('Are you sure to delete this user?')) {
      dispatch(deleteUser(user._id));
    }
  };

if (isMobile) {
  return (
    <div style={{marginTop: "0rem"}}>
      <h3o>Users</h3o>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="CARD_001" style={{marginTop: "3rem"}}> 
            {users.map((user) => (
              <div key={user._id}>
                <div><hv>User Id:</hv>&nbsp;&nbsp;{user._id}</div>
                <div><hv>User Name:</hv>&nbsp;&nbsp;{user.name}</div>
                <div><hv>User Email:</hv>&nbsp;&nbsp;{user.email}</div>
                <div><hv>User is Seller:</hv>&nbsp;&nbsp;{user.isSeller ? 'YES' : ' No'}</div>
                <div><hv>User is Admin:</hv>&nbsp;&nbsp;{user.isAdmin ? 'YES' : 'No'}</div>
                <div>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="CARD_001">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>SELLER</th>
              <th>ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isSeller ? 'YES' : ' No'}</td>
                <td>{user.isAdmin ? 'YES' : 'No'}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      )}
    </div>
  );
}
export default UserListScreen;


// WEBPACK FOOTER //
// ./src/screens/UserListScreen.js