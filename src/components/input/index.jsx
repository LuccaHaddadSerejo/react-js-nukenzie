import "./style.css";

function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      className="input"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
}

export default Input;
