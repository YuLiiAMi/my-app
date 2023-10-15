import React from "react";
import "./Login.css";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/api/products/table");
  };

  return (
    <div className="Login">
      <Form onLogin={handleLogin} />
    </div>
  );
};

export default Login;
