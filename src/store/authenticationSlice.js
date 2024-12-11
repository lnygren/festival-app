import { createSlice } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
  name: 'counter',
  initialState: {
   authenticated: false
  },
  reducers: {
    setAuthenticated: (state, payload) => {
    
      state.authenticated = payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAuthenticated } = authenticationSlice.actions

export default authenticationSlice.reducer