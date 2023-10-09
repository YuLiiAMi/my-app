import "./ButtonPreview.css";

const ButtonPreview = ({ text, onClick, icon }) => {
  return (
    <div>
      <button onClick={onClick}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default ButtonPreview;
