import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserComponent() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
      {user.loggedIn ? (
        <>
          <h2>Selamat Datang, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Anda Belum Login, Silakan login</h2>
          <button onClick={() => login('Dhiaraqi')}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserComponent;
