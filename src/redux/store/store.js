import { configureStore } from '@reduxjs/toolkit';
import { passwordGeneratorSlice } from '../features/passwordGeneratorSlice';
import { memorablePasswordGeneratorSlice } from '../features/memorablePasswordGeneratorSlice';
import { sha256HashingSlice } from '../features/sha256HashingSlice';
import { colorSlice } from '../features/colorSlice';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// if using the RTK query
// import { randomWordFetch } from '../../resources/util/randomWordFetch/randomWordFetch';

const store = configureStore({
    reducer: {
        passwordGenerator: passwordGeneratorSlice.reducer,
        memorablePassword: memorablePasswordGeneratorSlice.reducer,
        sha256Hashing: sha256HashingSlice.reducer,
        colorState: colorSlice.reducer,

        // if using RTK query
        // [randomWordFetch.reducerPath]: randomWordFetch.reducer,
    },
    // if using the RTK query
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(randomWordFetch.middleware),

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreState: true,
            ignoreActions: true,
        },
    }),
});

export { store };