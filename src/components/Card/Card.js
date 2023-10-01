import "./Card.css";
import logo from "../../logo.svg";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Card = () => {
  return (
    <div className="Login-card">
      <img src={logo} className="App-logo" alt="logo" />
      <Input />
      <Button />
    </div>
  );
};

export default Card;
