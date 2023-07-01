import React, { createContext } from "react";


function setToken(key, value) {
  localStorage.setItem(key, value);
}

export const PhoneContext = createContext();

//--------------------- CONSTANTS ----------------
const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";
const GET_ADMIN = "GET_ADMIN";

//--------------------- REDUCERS ----------------

//  admin reducer for handling token
function tokenReducer(state, action) {
  if (action.type === LOGOUT) {
    return (state = action.payload);
  }
  if (action.type === LOGIN) {
    return (state = action.payload);
  }

  return state;
}

// user reducer for handling user data
function userReducer(state, action) {
  if (action.type === GET_ADMIN) {
    return (state = action.payload);
  }
}

//--------------------- CONTEXT PROVIDER ----------------

export function PhoneProvider({ children }) {
  const [token, dispatchToken] = React.useReducer(tokenReducer, localStorage.getItem('token'));
  // const [admin, dispatchUser] = React.useReducer(userReducer, null);

  const logout = React.useCallback(() => {
    dispatchToken({ type: LOGOUT, payload: false });
  }, []);

  const login = React.useCallback(() => {
    dispatchToken({ type: LOGIN, payload: localStorage.getItem('token') });
  }, []);

  // const setAdmin = React.useCallback((admin) => {
  //   dispatchAdmin({ type: GET_ADMIN, payload: admin });
  // }, []);


  const value = {
    token,
    logout,
    login,
    // admin,
    // setAdmin,
  };

  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
}
