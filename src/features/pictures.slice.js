import { createSlice } from "@reduxjs/toolkit";

export const pictureSlice = createSlice({
    name: "pictures",
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: (state, { payload }) => {
            state.pictures = payload;
        },
        addPicturesData: (state, { payload }) => {
            state.pictures.push(payload);
        }
    }
})

export const { setPicturesData } = pictureSlice.actions;
export const { addPicturesData } = pictureSlice.actions;
export default pictureSlice.reducer;