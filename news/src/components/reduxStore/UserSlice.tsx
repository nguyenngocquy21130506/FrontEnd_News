import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    password: string;
}

interface Comment {
    link: string; // Thêm link để định danh bài viết
    email: string;
    content: string;
    time: string;
}

interface UserState {
    users: User[];
    currentUser: User | null;
    comments: Comment[];
}

const initialState: UserState = {
    users: [],
    currentUser: JSON.parse(sessionStorage.getItem('currentUser') || 'null'),
    comments: JSON.parse(localStorage.getItem('comments') || '[]'),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser(state, action: PayloadAction<User>) {
            state.users.push(action.payload); // Thêm người dùng mới
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.currentUser = action.payload; // Đăng nhập thành công
            sessionStorage.setItem('currentUser', JSON.stringify(action.payload));
        },
        logoutSuccess(state) {
            state.currentUser = null; // Đăng xuất
            sessionStorage.removeItem('currentUser');
        },
        addComment(state, action: PayloadAction<Comment>) {
            state.comments = Array.isArray(state.comments) ? [...state.comments, action.payload] : [action.payload];
            localStorage.setItem('comments', JSON.stringify(state.comments));
        },
    },
});

export const { registerUser, loginSuccess, logoutSuccess, addComment } = userSlice.actions;
export default userSlice.reducer;
