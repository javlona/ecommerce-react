import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../utils/axios';

const initialState = {
    data: null,
    pages: null,
    isLoading: false,
    error: null,
  };
  
  export const searchReducer = createAsyncThunk('products/search', async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`products/search/${data}/1`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  })

  export const searchSlice = createSlice({
    name: 'search',
    initialState,
   
    extraReducers: (builder) => {
      builder
        .addCase(searchReducer.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(searchReducer.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload.payload;
          state.pages = action.payload.pages;
        })
        .addCase(searchReducer.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
    },
  });
  
  export default searchSlice.reducer;
  