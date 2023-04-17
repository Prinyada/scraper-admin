import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FiLogIn } from "react-icons/fi";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../components/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  function error() {
    toast.error("อีเมลล์หรือรหัสผ่านไม่ถูกต้อง", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const auth = getAuth();
  const { currentUser } = useContext(AuthContext);

  async function handleSubmit() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (currentUser) {
          dispatch({ type: "ADMIN", payload: true });
          navigate("/admin/main");
        }
      })
      .catch((e) => {
        error();
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      });
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="text-login">
          เข้าสู่ระบบ&nbsp;
          <FiLogIn />
        </h1>
        <input
          className="input-login"
          type="text"
          placeholder="ชื่อผู้ใช้"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input-login"
          type="password"
          placeholder="รหัสผ่าน"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="login-btn" type="submit" onClick={handleSubmit}>
          เข้าสู่ระบบ
        </div>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default Login;
