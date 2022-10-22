import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: 'colorState',
    initialState: {
        passwordTab: true,
        memorableTab: false,
        shaTab: false,
        settingsColor: '#AF7AB3',
    },
    reducers: {
        handleChange: (state, action) => {
            switch (action.payload.target.name) {
                case 'passwordNav':
                    state.passwordTab = true;
                    state.memorableTab = false;
                    state.shaTab = false;
                    state.settingsColor = '#AF7AB3';
                    break;
                case 'memorableNav':
                    state.passwordTab = false;
                    state.memorableTab = true;
                    state.shaTab = false;
                    state.settingsColor = '#1572A1';
                    break;
                case 'shaNav':
                    state.passwordTab = false;
                    state.memorableTab = false;
                    state.shaTab = true;
                    state.settingsColor = '#E6A157';
                    break;
                case 'acknowledgements':
                    state.passwordTab = false;
                    state.memorableTab = false;
                    state.shaTab = false;
                    break;
                default:
                    state.passwordTab = false;
                    state.memorableTab = false;
                    state.shaTab = false;
                    state.settingsColor = '#AF7AB3';
                    break;
            };
        },
    },
});

export const { handleChange } = colorSlice.actions;

export const selectPasswordTab = (state) => state.colorState.passwordTab;
export const selectMemorableTab = (state) => state.colorState.memorableTab;
export const selectShaTab = (state) => state.colorState.shaTab;
export const selectSettingsColor = (state) => state.colorState.settingsColor;

export default colorSlice.reducer;
