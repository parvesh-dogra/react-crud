import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { deletUser } from "../redux/reducers/userReducer";
import { Link } from 'react-router-dom';

const Home = () => {
  const {users} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    dispatch(deletUser({id}));
  }
  return (
    <Box sx={{ m: 2 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Link to={`/edit?id=${user.id}`}>
                  <Button variant="contained" sx={{mr:1}}>Edit</Button> 
                  </Link>
                  <Button variant="contained" onClick={(e) => handleDelete(user.id)} color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
