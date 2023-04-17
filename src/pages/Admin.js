import React, { useContext, useEffect } from "react";
import "./Admin.css";
import { UserContext } from "../App";
import { AuthContext } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Editpassword from "../components/Editpassword";
import InsertAndDelete from "../components/InsertAndDelete";
import MainAdmin from "../components/MainAdmin";

function Admin() {
  const { state, dispatch } = useContext(UserContext);

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
        dispatch({ type: "ADMIN", payload: false });
        return navigate("/");
    }
  },[])

  return (
    <div className="admin-container">
      <Routes>
        <Route path="main" element={<MainAdmin />} />
        <Route path="editpassword" element={<Editpassword />} />
        <Route path="insertdata" element={<InsertAndDelete />} />
      </Routes>
    </div>
  );
}

export default Admin;
