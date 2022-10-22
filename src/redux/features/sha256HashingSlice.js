import { createSlice } from '@reduxjs/toolkit';
import { sha256Hashing } from '../../resources/util/sha256Hashing/sha256Hashing';

export const sha256HashingSlice = createSlice({
    name: 'sha256Hashing',
    initialState: {
        textToBeHashed: '',
        hash: '',
        hashStatus: 'idle',
        errorStatus: null,
    },
    reducers: {
        handleChange: (state, action) => {
            state[action.payload.target.name] = action.payload.target.value;
        },

        resetHashStates: (state) => {
            state.textToBeHashed = '';
            state.hash = '';
            state.hashStatus = 'idle';
            state.errorStatus = null;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(sha256Hashing.rejected, (state, action) => {
            state.hashStatus = 'failed';
            state.errorStatus = action.error.message;
        })
        .addCase(sha256Hashing.pending, (state, action) => {
            state.hashStatus = 'loading';
        })
        .addCase(sha256Hashing.fulfilled, (state, action) => {
            state.hashStatus = 'succeded';
            state.hash = action.payload;
        })
    }
});

export const { handleChange, resetHashStates } = sha256HashingSlice.actions;

export const selectTextToBeHashed = (state) => state.sha256Hashing.textToBeHashed;
export const selectHash = (state) => state.sha256Hashing.hash;

export default sha256HashingSlice.reducer;
