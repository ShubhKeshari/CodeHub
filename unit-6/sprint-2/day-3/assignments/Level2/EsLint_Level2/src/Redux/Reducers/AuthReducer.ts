
// interface User {
//   email: string;
//   password: string;
// }


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginData } from "../action";




// Define initial state
const initialUserState = {
  isLoggedIn: false,
  user: [],
  error: false,
};

// Create slice
const loginSlice = createSlice({
  name: 'login',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = true;
        state.error = false;
        state.user = action.payload;
      })
      .addCase(loginData.rejected, (state) => {
        state.isLoggedIn = false;
        state.error = true; // Update error state accordingly
      })
      .addCase(loginData.pending, (state) => {
        state.isLoggedIn = false; // Assuming login is pending, the user is not logged in
        state.error = false;
      });
  },
});

// Export reducer and actions
export const { reducer: loginReducer } = loginSlice;
export const {} = loginSlice.actions; // Add any other actions you may define later

