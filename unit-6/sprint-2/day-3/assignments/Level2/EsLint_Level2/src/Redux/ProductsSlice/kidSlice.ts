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

 
export const fetchKidData = createAsyncThunk<any, void>(
    'kidData/fetchData',
    async () => {
        const res = await axios.get('https://mock-server-app-1.onrender.com/kids');
        // console.log(res.data);
        return res.data;
        
    }
);

const kidSlice = createSlice({
    name: 'kidData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchKidData.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchKidData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null;
            })
            .addCase(fetchKidData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "An error occurred";
            });
    },
});

export default kidSlice.reducer;
