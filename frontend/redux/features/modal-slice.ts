import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//modal slice
type ModalState = {
    isModalOpen: boolean;
    modalType: string | null;
};

const initialState: ModalState = {
    isModalOpen: false,
    modalType: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.isModalOpen = true;
            state.modalType = action.payload;
        },
        closeModal: state => {
            state.isModalOpen = false;
            state.modalType = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
