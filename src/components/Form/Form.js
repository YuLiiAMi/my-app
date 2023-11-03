import React, { useState } from "react";
import "./Form.css";
import logo from "../../logo.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Form = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ userName: "", password: "" });
  const [message, setMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = { userName: "", password: "" };

    if (!userName) {
      newErrors.userName = "Введите логин";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Введите пароль";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: userName, password: password }),
        });

        if (response.status === 200) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          setUserName("");
          setPassword("");
          setMessage("Ваши данные успешно отправлены");
          onLogin();
        } else {
          setUserName("");
          setPassword("");
          const errorMessage = await response.text();
          setMessage(`${errorMessage}`);
        }
      } catch (error) {
        console.error("Ошибка во время авторизации", error);
      }
    }
  };

  return (
    <div className="form-container">
      <img src={logo} className="App-logo-form" alt="logo" />
      <Input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User name"
        error={errors.userName}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        error={errors.password}
      />
      <Button onClick={handleSubmit} text="Login" />
      {message && <div className="message">{message}</div>}{" "}
    </div>
  );
};

export default Form;
