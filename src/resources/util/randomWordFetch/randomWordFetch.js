import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios  from 'axios';

const randomWordFetch = createAsyncThunk('memorablePassword/fetchWord', async () => {
//     // const response = await fetch('https://random-word-api.herokuapp.com/all')
//     // .then(response => response.json())
//     // return response;

    const response = await axios.get('https://random-word-api.herokuapp.com/all');

    const data = response.data;

    const responseData = [];
    for (let k = 0; k < 1000; k++) {
        const randomIdx = Math.floor(Math.random() * data.length);
        responseData.push(data[randomIdx]);
    };

    return responseData;
    
    // return response.data;
});

// -------------------------------------------------------------------------------------------
// using RTK query
// 
// const randomWordFetch = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://random-word-api.herokuapp.com/' }),
//     reducerPath: 'fetchWordWithRTKquery',
//     endpoints: (build) => ({
//         fetchWord: build.query({
//             query: (endpoint) => `${endpoint}`,
//         }),
//     }),
// });

export { randomWordFetch };