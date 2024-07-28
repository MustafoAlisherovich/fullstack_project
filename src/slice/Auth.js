import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSuccess: state => {},
        loginUserFailured: state => {},
    }
})

export const {loginUserStart} = authSlice.actions
export default authSlice.reducer