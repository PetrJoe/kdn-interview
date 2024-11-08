import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModalOpen: false,
        content: null,
    },
    reducers: {
        openModal(state, action) {
            state.isModalOpen = true;
            state.content = action.payload;
        },
        closeModal(state) {
            state.isModalOpen = false;
            state.content = null;
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;