import { createContext, useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { initialState, reducer } from "./reducer/UseReducer";
import "./App.css";
import { AuthProvider } from "./components/Auth";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AuthProvider>
        <UserContext.Provider value={{ state, dispatch }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/admin/*" element={<Admin />} />
          </Routes>
        </UserContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
