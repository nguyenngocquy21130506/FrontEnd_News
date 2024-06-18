import { createSlice } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho người dùng
interface User {
    email: string;
    password: string;
}

const initialState: {
    users: User[];
    currentUser: User | null;
} = {
    users: [],
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload);
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.currentUser = null;
        },
    },
});

export const { registerUser, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
