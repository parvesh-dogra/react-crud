import React from 'react';
import { useState } from 'react';
import {Box, Typography, TextField, Grid, Button} from "@mui/material";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/reducers/userReducer';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.user);

  const handleChange = (e) =>{
    setUser({...user, [e.target.id]: e.target.value}); 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, ...user}));
    navigate('/')
  }
  return (
    <Box >
      <Typography variant='h5' >Register</Typography>
      <Box component="form"
      onSubmit={(e) => handleSubmit(e)}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <Grid item md={6} xs={12}>
        <TextField id="name" label="Name" variant="outlined" onChange={handleChange} />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField id="email" label="Email" variant="outlined" onChange={handleChange}  />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField id="phone" label="Phone" variant="outlined" onChange={handleChange}  />
      </Grid>
      <Button type='submit' variant='contained'>Submit</Button>
      </Box>
    </Box>
  )
}

export default Register