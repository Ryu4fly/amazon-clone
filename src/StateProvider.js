// setup data layer
// We need this to track the basket

import React, { createContext, userContext, userReducer } from "react"

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={userReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
)
