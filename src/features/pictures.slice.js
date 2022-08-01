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
        },
        editPictureData: (state, { payload }) => {
            state.pictures = state.pictures.map((pic) => {
                if(pic.id === payload[1]){
                    return {
                        ...pic,
                        artist: payload[0],
                    }
                } else {
                    return pic;
                }
            })
        },
        deletePictureData: (state, { payload }) => {
            state.pictures = state.pictures.filter((pic) => pic.id !== payload)
        }
    }
})

export const { setPicturesData, addPicturesData, editPictureData, deletePictureData } = pictureSlice.actions;
export default pictureSlice.reducer;