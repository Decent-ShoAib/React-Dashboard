import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserPage = () => {
  const [userData, setUserData] = useState([]);




  const getData = () => {
    axios.get('https://fakestoreapi.com/users')
      .then((res) => {
        setUserData(res.data);
      })
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <h2>User Data Table</h2>
      
      <table border="1" cellPadding="9" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, i) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.email}</td>
              <td>{e.username}</td>
              <td>{e.password}</td>
              <td>{e.name.firstname}</td>
              <td>{e.name.lastname}</td>
              <td>{e.phone}</td>
              <td><Link to={`/users/${e.id}`}> <Button variant="contained" endIcon={<SendIcon />} ></Button> </Link></td>
            </tr>
          ))}
      </tbody>
    </table>
    </div >
  )
}

export default UserPage;



