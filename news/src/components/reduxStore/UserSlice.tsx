// redux/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string;
    password: string;
}

const initialState: UserState = {
    email: '',
    password: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerSuccess(state, action: PayloadAction<{ email: string; password: string }>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        loginSuccess(state, action: PayloadAction<{ email: string; password: string }>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logout(state) {
            state.email = '';
            state.password = '';
        },
    },
});

export const { registerSuccess, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
