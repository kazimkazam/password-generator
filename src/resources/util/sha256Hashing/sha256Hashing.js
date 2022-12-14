import { createAsyncThunk } from '@reduxjs/toolkit';

// when testing
// import crypto from "crypto";
// var { TextEncoder } = require('util');

const sha256Hashing = createAsyncThunk('sha256Hashing/createSha256Hash', async (text) => {
    // encode as (utf-8) Uint8Array
    const msgUint8 = new TextEncoder().encode(text);

    // hash the text
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    
    // when testing
    // const hashBuffer = await crypto.webcrypto.subtle.digest('SHA-256', msgUint8);

    // convert buffer to byte array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
});

export { sha256Hashing };