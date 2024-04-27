/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
    isLoading: boolean;
    data: any[];
    isError: string | boolean | null;
}

const initialState: DataState = {
    isLoading: false,
    data: [],
    isError: false,
};

 
export const fetchWomenData = createAsyncThunk<any, void>(
    'womenData/fetchData',
    async () => {
        const res = await axios.get('https://mock-server-app-1.onrender.com/womens');
        // console.log(res.data);
        return res.data;
        
    }
);

const womenSlice = createSlice({
    name: 'womenData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWomenData.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchWomenData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null;
            })
            .addCase(fetchWomenData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "An error occurred";
            });
    },
});

export default womenSlice.reducer;
