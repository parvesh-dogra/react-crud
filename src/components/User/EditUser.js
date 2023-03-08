import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { updateUser } from "../../redux/reducers/userReducer";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  let activeUser = null;
  if (id) {
    activeUser = users.filter((user) => user.id === id)?.[0];
  }
  const [user, setUser] = useState({
    name: activeUser?.name,
    email: activeUser?.email,
    phone: activeUser?.phone,
  });

  useEffect(() => {
    if (!activeUser) {
      navigate("/404");
      return;
    }
  }, [activeUser, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, ...user }));
    navigate("/");
  };

  return (
    <Box>
      {activeUser && (
        <>
          <Typography variant="h5">Edit User</Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid item md={6} xs={12}>
              <TextField
                id="name"
                label="Name"
                value={user.name}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="email"
                label="Email"
                value={user.email}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="phone"
                label="Phone"
                value={user.phone}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default EditUser;
