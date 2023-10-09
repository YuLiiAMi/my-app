import React, { useState } from "react";
import "./Input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ type = "text", placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (value === "") {
      setError(`Введите ${placeholder.toLowerCase()}`);
    } else {
      setError("");
    }
  };

  return (
    <div className={`login-input ${error ? "error" : ""}`}>
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {type === "password" && (
        <div className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
