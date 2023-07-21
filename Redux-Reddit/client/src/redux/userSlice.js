import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Jonathan",
        age: "24",
        about: "I'm a software engineer",
        avaUrl: "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        themeColor: "#ff9051" ,
        pending: false,
        error: false,
    },
    reducers: { //để action mấy state 
        updateStart: (state) => { // Khi gọi api về client
            state.pending = true;
        },

        updateError: (state) => { // Khi gọi api về client bị lỗi
            state.pending = false;
            state.error = true;
        },

        updateSuccess: (state,action) => {
            state.pending = false;
            state.error = false;      
            state.name = action.payload.name; 
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }    
    }
})

export const { updateStart, updateError, updateSuccess } = userSlice.actions
export default userSlice.reducer