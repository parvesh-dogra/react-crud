import { createSlice } from "@reduxjs/toolkit";

const UserData = [
  {
    id: 1,
    name: "test1",
    email: "test1@gmail.com",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "test2",
    email: "test2@gmail.com",
    phone: "9876543211",
  },
];

const initialState = {
  users: UserData,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const {id, name, email, phone } = action.payload;
      const activeUser = state.users.find(user => user.id === id);
      if(activeUser){
        activeUser.name = name;
        activeUser.email = email;
        activeUser.phone = phone;
      }
    },
    deletUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, getUser, updateUser, deletUser } = userSlice.actions;
export default userSlice.reducer;
