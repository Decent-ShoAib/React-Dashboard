import { Container, TextField, Button, Card, CardContent, Typography, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import axios from 'axios'
import React, { useState } from 'react'

function GithubFinder() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async ()=>{
   try{
    await axios.get(`https://api.github.com/users/${userName}`)
   .then((res)=>{
       setUserData(res.data);
       setError('');
   })
   }catch(err){
      setUserData(null)
      setError("user not found")
   }
  }
console.log(userData);

return (
  <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
    <Typography variant="h4" gutterBottom>
      GitHub Finder
    </Typography>
    <TextField
      label="Enter GitHub Username"
      variant="outlined"
      onChange={(e)=>{
        setUserName(e.target.value)
      }}
      fullWidth
      sx={{ mb: 2 }}
    />
    <Button
      variant="contained"
      startIcon={<SearchIcon />}
      fullWidth
      onClick={getData}
    >
      Search
    </Button>
     {error && <h2>user not found</h2>}

    {userData && (
      <Card sx={{ mt: 3, p: 2 }}>
      <CardContent>
        <Avatar src={userData.avatar_url} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
        <Typography variant="h4">User Name: {userData.login}</Typography>
        <Typography variant="h6" color="text.secondary">@{userData.name}</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>Followers:{userData.followers} | Following:{userData.following}</Typography>
        <Typography variant="h6">Public Repos:{userData.public_repos}</Typography>
      </CardContent>
    </Card> 
    )}
  </Container>
);
  
}

export default GithubFinder