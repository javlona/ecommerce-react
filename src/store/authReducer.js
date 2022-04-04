import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../utils/axios';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

export const authSignUp = createAsyncThunk('auth/signUp', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/sign-up', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

export const authSignIn = createAsyncThunk('auth/signIn', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/sign-in', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      return initialState
    },
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.payload;
        state.token = action.payload.token;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.payload;
        state.token = action.payload.token;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.msg;
      })
  },
});

export const { logout } = authSlice.actions;

export const selectAuth = (state) => state.user;

export default authSlice.reducer;
