import React, { useContext } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import { AuthProvider, AuthContext } from "./components/AuthContext";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <div className="container">
      <Header />
      {authContext.auth.email ? "Welcome" : <Login />}
    </div>
  );
}

function AppWithStore() {
  return (
    <>
      <AuthProvider>
        <App />
      </AuthProvider>
    </>
  );
}

export default AppWithStore;
