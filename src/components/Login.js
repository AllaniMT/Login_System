import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  function login(e) {
    e.preventDefault();

    //@todo: Sending api request to validate data and get token

    if (password === "123") {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("Password wrong");
    }
  }

  return (
    <>
      <form>
        <h2>Login</h2>
        <input
          type="email"
          className="form-control"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </>
  );
}
