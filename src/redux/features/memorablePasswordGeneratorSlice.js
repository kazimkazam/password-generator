import { createSlice } from '@reduxjs/toolkit';
import { randomWordFetch } from '../../resources/util/randomWordFetch/randomWordFetch';

export const memorablePasswordGeneratorSlice = createSlice({
    name: 'memorablePassword',
    initialState: {
        numberWords: 3,
        includeNumbers: true,
        separator: '',
        words: [],
        memorablePassword: [],
        fetchStatus: 'idle',
        errorStatus: null,
    },
    reducers: {
        createMemorablePassword: (state, action) => {
            state.memorablePassword = [];

            let password = [];
            const numberWords = state.numberWords < 10 ? state.numberWords : 10;
            for (let k = 0; k < numberWords; k++) {
                const randomIdx = Math.floor(Math.random() * state.words[0].length);
                password.push(state.words[0][randomIdx]);
            };

            password = password.join(state.separator);

            if (state.includeNumbers) {
                password = password.replace(new RegExp('a', 'g'), '4');
                password = password.replace(new RegExp('i', 'g'), '1');
                password = password.replace(new RegExp('b', 'g'), '8');
                password = password.replace(new RegExp('e', 'g'), '3');
                password = password.replace(new RegExp('o', 'g'), '0');
                password = password.replace(new RegExp('t', 'g'), '7');
                password = password.replace(new RegExp('z', 'g'), '2');
                password = password.replace(new RegExp('xis', 'g'), '6');
            };

            state.memorablePassword.push(password);
            
            // -------------------------------------------- 
            // if using RTK query

            // const dictionary = action.payload;

            // let password = [];
            // const numberWords = state.numberWords < 10 ? state.numberWords : 10;
            // for (let k = 0; k < numberWords; k++) {
            //     const randomIdx = Math.floor(Math.random() * dictionary.length);
            //     password.push(dictionary[randomIdx]);
            // };

            // password = password.join(state.separator);

            // state.memorablePassword.push(password);
            // -----------------------------------------
        },

        handleChange: (state, action) => {
            state[action.payload.target.name] = action.payload.target.value;
        },

        handleCheckboxChange: (state, action) => {
            const value = action.payload.target.type === "checkbox" ? action.payload.target.checked : action.payload.target.value;
            state[action.payload.target.name] =  value;
        },

        resetMemorablePasswordStates: (state) => {
            state.numberWords = 3;
            state.includeNumbers = true;
            state.separator = '';
            state.words = [];
            state.memorablePassword = [];
            state.fetchStatus = 'idle';
            state.errorStatus = null;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(randomWordFetch.rejected, (state, action) => {
            state.fetchStatus = 'failed';
            state.errorStatus = action.error.message;
        })
        .addCase(randomWordFetch.pending, (state, action) => {
            state.fetchStatus = 'loading';
        })
        .addCase(randomWordFetch.fulfilled, (state, action) => {
            state.fetchStatus = 'succeded';
            state.words.push(action.payload);
        })
    },
});

export const { createMemorablePassword, handleChange, handleCheckboxChange, resetMemorablePasswordStates } = memorablePasswordGeneratorSlice.actions;

export const selectMemorablePassword = (state) => state.memorablePassword.memorablePassword;
export const selectMemorablePasswordNumberWords = (state) => state.memorablePassword.numberWords;
export const selectMemorablePasswordWords = (state) => state.memorablePassword.words;
export const selectMemorablePasswordIncludeNumbers = (state) => state.memorablePassword.includeNumbers;

export default memorablePasswordGeneratorSlice.reducer;