
import { createSlice } from '@reduxjs/toolkit';

export const meetingSlice = createSlice({
    name: 'event',
    initialState: {
        formData: [],
        localStorageFlag: 0,
        eventId: 0,
    },
    reducers: {
        updateFormData: (state, action) => {
            localStorage.setItem('formData', JSON.stringify(action.payload));
            state.formData = action.payload;
            state.localStorageFlag = 1;
        },
    }
});

export const { updateFormData } = meetingSlice.actions;

