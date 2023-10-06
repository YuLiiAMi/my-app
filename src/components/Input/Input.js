import "./Input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = () => {
  return (
    <div className="login-input">
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="Password" />
      <FaEye className="eyeIcon" />
    </div>
  );
};

export default Input;
