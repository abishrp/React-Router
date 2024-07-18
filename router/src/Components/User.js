// src/Components/Home.js
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {id} = useParams();
  return (
    <div>
      <h2>User</h2>
      <p>Welcome User{id}</p>
    </div>
  );
}

export default User;
