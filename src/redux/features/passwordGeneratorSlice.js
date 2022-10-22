import { createSlice } from '@reduxjs/toolkit';

export const passwordGeneratorSlice = createSlice({
    name: 'passwordGenerator',
    initialState: {
        numberChars: 10,
        lowercase: true,
        uppercase: true,
        includeNumbers: true,
        includeSymbols: true,
        charsToExclude: '',
        howMany: 1,
        passwords: [],
    },
    reducers: {
        createPassword: (state) => {
            state.passwords = [];

            // initiate dictionary available
            const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
            const upperAlphabet = lowerAlphabet.toUpperCase();
            const numbers = '0123456789';
            const symbols = '\\|!@#£$%&/()=?{[]}+*~^_-';

            let dictionary = '';
            if (state.lowercase) {
                dictionary += lowerAlphabet;
            };
            if (state.uppercase) {
                dictionary += upperAlphabet;
            };
            if (state.includeNumbers) {
                dictionary += numbers;
            };
            if (state.includeSymbols) {
                dictionary += symbols;
            };

            // filter out chars to exclude
            for (let char of state.charsToExclude) {
                dictionary = dictionary.replace(char, '');
            };

            const numberChars = state.numberChars < 100 ? state.numberChars : 100;
            for (let k = 0; k < state.howMany; k++) {
                let password = '';
                for (let t = 0; t < numberChars; t++) {
                    const randomIdx = Math.floor(Math.random() * dictionary.length);
                    password += dictionary[randomIdx];
                };
                state.passwords.push(password);
            };
        },

        handleChange: (state, action) => {
            state[action.payload.target.name] = action.payload.target.value;
        },

        handleCheckboxChange: (state, action) => {
            const value = action.payload.target.type === "checkbox" ? action.payload.target.checked : action.payload.target.value;
            state[action.payload.target.name] =  value;
        },

        handleAllCheckboxesBackTrue: (state) => {
            state.lowercase = true;
            state.uppercase = true;
            state.includeNumbers = true;
            state.includeSymbols = true;
        },

        resetPasswordGeneratorStates: (state) => {
            state.numberChars = 10;
            state.lowercase = true;
            state.uppercase = true;
            state.includeNumbers = true;
            state.includeSymbols = true;
            state.charsToInclude = '';
            state.charsToExclude = '';
            state.howMany = 1;
            state.passwords = [];
        },
    },
});

export const { createPassword, handleChange, handleCheckboxChange, handleAllCheckboxesBackTrue, resetPasswordGeneratorStates } = passwordGeneratorSlice.actions;

export const selectPasswords = (state) => state.passwordGenerator.passwords;
export const selectNumberChars = (state) => state.passwordGenerator.numberChars;
export const selectLowercase = (state) => state.passwordGenerator.lowercase;
export const selectUppercase = (state) => state.passwordGenerator.uppercase;
export const selectIncludeNumbers = (state) => state.passwordGenerator.includeNumbers;
export const selectIncludeSymbols = (state) => state.passwordGenerator.includeSymbols; 

export default passwordGeneratorSlice.reducer;
