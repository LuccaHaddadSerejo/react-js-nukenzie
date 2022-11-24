import "./style.css";

function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      required={true}
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
