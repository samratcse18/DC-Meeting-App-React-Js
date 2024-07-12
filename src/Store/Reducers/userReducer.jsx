
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: []
    },
    reducers: {
        userInfo: (state, action) => {
            localStorage.setItem('userData', JSON.stringify(action.payload));
            state.userData = action.payload;
        },
    }
});

export const { userInfo } = userSlice.actions;

