import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    buttons: [
        { id: 1, label: 'Compound interest(Daily)' },
        { id: 2, label: 'Compound interest' },
        { id: 3, label: 'simple calculator' },
        { id: 4, label: 'Loan calculator' },
        { id: 5, label: 'Loan calculator' },
        { id: 6, label: 'Loan calculator' },
        { id: 7, label: 'Loan calculator' },
        { id: 8, label: 'Loan calculator' },
        // ...
    ],
};

const buttonSlice = createSlice({
    name: 'buttons', 
    initialState,
    reducers: {
        addButton: (state, action) => {
            state.buttons.push(action.payload);
        },
        removeButton: (state, action) => {
            state.buttons = state.buttons.filter((button) => button.id !== action.payload);
        }
    },
});

export const { addButton, buttons, removeButton } = buttonSlice.actions;
export default buttonSlice.reducer;  