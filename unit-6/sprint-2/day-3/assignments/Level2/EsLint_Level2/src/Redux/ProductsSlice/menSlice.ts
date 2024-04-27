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

 
export const fetchMenData = createAsyncThunk<any, void>(
    'menData/fetchData',
    async () => {
        const res = await axios.get('https://mock-server-app-1.onrender.com/mens');
        return res.data;
    }
);

const menSlice = createSlice({
    name: 'menData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenData.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchMenData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.isError = null;
            })
            .addCase(fetchMenData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.error.message || "An error occurred";
            });
    },
});

export default menSlice.reducer;
