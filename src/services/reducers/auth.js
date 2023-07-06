import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: JSON.parse(localStorage.getItem('auth'))?.email,
    password: JSON.parse(localStorage.getItem('auth'))?.password
}

export const AuthSLice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        ADD_USER_INFO: (state, { payload }) => {
            const data = JSON.parse(localStorage.getItem('auth'));

            state.email = data.email
            state.password = data.password
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD_USER_INFO } = AuthSLice.actions

export default AuthSLice.reducer